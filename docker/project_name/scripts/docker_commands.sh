#!/bin/sh
##!/bin/bash
##!/usr/bin/env bash

# Catch env var from .env
set -a
source ./.env

COLOR_ERR=`tput setaf 1`
COLOR_INFO=`tput setaf 2`
COLOR_RESET=`tput sgr0`

USERID=$(id -u)

tag_builder="${APP}:${BUILDER}-${BUILDER_VERSION}"
tag_wa="${APP}:${WEBAPP}-${WEBAPP_VERSION}"
tag_ws="${APP}:${WEBSERVICE}-${WEBSERVICE_VERSION}"

dc_builder=${DC_BUILDER}
dc_wa=${DC_WEBAPP}
dc_ws=${DC_WEBSERVICE}

function test() {
    echo `pwd`
    echo "SUCCESS"
    echo "APP : $APP"
    echo "BUILDER : ${BUILDER}"
    echo "BUILDER_VERSION : ${BUILDER_VERSION}"
    echo "WEBAPP : ${WEBAPP}"
    echo "WEBAPP_VERSION : ${WEBAPP_VERSION}"
    echo "WEBSERVICE : ${WEBSERVICE}"
    echo "WEBSERVICE_VERSION : ${WEBSERVICE_VERSION}"
    echo "DC_BUILDER : ${DC_BUILDER}"
    echo "DC_WEBAPP : ${DC_WEBAPP}"
    echo "DC_WEBSERVICE : ${DC_WEBSERVICE}"
}

############################
#BUILD
function build() {
    echo "build $1 $2"
    docker build -t $1 -f ./dockerfiles/dockerfile_$2 ../../
}

function build_builder_front() {
    build ${tag_builder} ${BUILDER}
}

function build_front_bundle( ) {
    echo "${dc_builder}"
    echo "${APP}"
    docker-compose -f ./${dc_builder} run -u $USERID --service-ports --rm ${APP}
}

function build_wa() {
    build ${tag_wa} ${WEBAPP}
}

function build_ws() {
    build ${tag_ws} ${WEBSERVICE}
}

############################
#START

function up() {
    echo "up $1 $USERID"
    docker-compose -f ./$1 run -u $USERID --service-ports --rm -d $2
}

function up_wa() {
    up ${dc_wa} ${WEBAPP}
}

function up_ws() {
    up ${dc_ws} ${WEBSERVICE}
}

function up_debug_front_bundle( ) {
   docker-compose -f ./${dc_builder} run --service-ports --rm ${APP}_debug
}

############################
#STOP
function down() {
    echo "down $1"
    docker-compose -f ./$1 down -v
}

function down_wa() {
    down ${dc_wa}
}

function down_ws() {
    down ${dc_ws}
}



function help_info() {
    echo "Need a argument:"
    echo "$COLOR_INFO build_pilot $COLOR_RESET"
    echo "$COLOR_INFO build_polling $COLOR_RESET"

    echo "$COLOR_INFO pilot_up $COLOR_RESET"
    echo "$COLOR_INFO polling_up $COLOR_RESET"

    echo "$COLOR_INFO pilot_down $COLOR_RESET"
    echo "$COLOR_INFO down_ws $COLOR_RESET"

    echo "$COLOR_INFO help | h $COLOR_RESET"
}

echo "------------------- docker compose: $1 $MICROSERVICE -------------------"

case $1 in
    test)                   test ;;
    build_builder_front)    build_builder_front ;;
    build_front_bundle)     build_front_bundle ;;
    build_wa)               build_wa ;;
    build_ws)               build_ws ;;
    up_wa)                  up_wa ;;
    up_ws)                  up_ws ;;
    up_debug_front_bundle)  up_debug_front_bundle ;;
    down_wa)                down_wa ;;
    down_ws)                down_ws ;;
    help|h)                 help_info;;
    *)                      echo "$COLOR_ERR INVALID ARG $COLOR_RESET"
                            help_info;;
esac