#!/bin/sh
##!/bin/bash
##!/usr/bin/env bash

#Donne le nom du dossier qui fait appel a ce script
COMPONENT_NAME=${PWD##*/}   
USERID=$(id -u)

file_runtime="docker-compose.yml"

function start( ){
   docker-compose -f ./${file_runtime} run --service-ports --rm -d ${COMPONENT_NAME}
}

function stop( ) {
    docker-compose -f ./${file_runtime} down -v
}


function help_info ( ){
    echo "Need a argument:"
    echo "$COLOR_INFO start $COLOR_RESET"
    echo "$COLOR_INFO stop $COLOR_RESET"
}

echo "------------------- docker compose: $1 $COMPONENT_NAME -------------------"

case $1 in
    start)                  start ;;
    stop)                   stop ;;
    help|h)                 help_info;;
    *)                      echo "$COLOR_ERR INVALID ARG $COLOR_RESET"
                            help_info;;
esac