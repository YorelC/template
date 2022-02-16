shell_executor=bash

test:
	$(shell_executor) ./scripts/docker_commands.sh test

###################
# BUILD CONTAINERS
###################
build_builder_front:
	$(shell_executor) ./scripts/docker_commands.sh build_builder_front

build_wa:
	$(shell_executor) ./scripts/docker_commands.sh build_wa

build_ws:
	$(shell_executor) ./scripts/docker_commands.sh build_ws

###################
# BUILD APP BUNDLE
###################
build_front_bundle:
	$(shell_executor) ./scripts/docker_commands.sh build_front_bundle

###################
# START CONTAINERS
###################
up_wa:
	$(shell_executor) ./scripts/docker_commands.sh up_wa

up_ws:
	$(shell_executor) ./scripts/docker_commands.sh up_ws

up_debug_front_bundle:
	$(shell_executor) ./scripts/docker_commands.sh up_debug_front_bundle

###################
# STOP CONTAINERS
###################
down_wa:
	$(shell_executor) ./scripts/docker_commands.sh down_wa

down_ws:
	$(shell_executor) ./scripts/docker_commands.sh down_ws