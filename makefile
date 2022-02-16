# user configuration
project=myproject

test:
	${MAKE} -C ./docker/${project} test

##################
# BUILD CONTAINERS
##################

#Build container's app
build-containers-app:
	${MAKE} -C ./docker/${project} build_builder_front
	${MAKE} -C ./docker/${project} build_wa
	${MAKE} -C ./docker/${project} build_ws

#Build container which make frontend react bundle
build_builder_front:
	${MAKE} -C ./docker/${project} build_builder_front

build_wa:
	${MAKE} -C ./docker/${project} build_wa

build_ws:
	${MAKE} -C ./docker/${project} build_ws


####################
# BUILD FRONT BUNDLE
####################
build_front_bundle:
	${MAKE} -C ./docker/${project} build_front_bundle


#################
# START CONTAINER
#################

up_app:
	${MAKE} -C ./docker/mongodb up
	${MAKE} -C ./docker/${project} up_ws
	${MAKE} -C ./docker/${project} up_wa

up_wa:
	${MAKE} -C ./docker/${project} up_wa

up_ws:
	${MAKE} -C ./docker/${project} up_ws

up_debug_front_bundle:
	${MAKE} -C ./docker/${project} up_debug_front_bundle

up_bdd:
	${MAKE} -C ./docker/mongodb up


################
# STOP CONTAINER
################

down_app:
	${MAKE} -C ./docker/${project} down_wa
	${MAKE} -C ./docker/${project} down_ws
	${MAKE} -C ./docker/mongodb down

down_wa:
	${MAKE} -C ./docker/${project} down_wa

down_ws:
	${MAKE} -C ./docker/${project} down_ws

down_bdd:
	${MAKE} -C ./docker/mongodb down
