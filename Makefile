ifndef VERBOSE
MAKEFLAGS += --no-print-directory
endif

SHELL:=/bin/bash


serve:
	@yarn start

build:
	@yarn build

deploy:
	@firebase deploy --only hosting:huma-docs

common/git-info:
	@echo "+ GIT Branch: "$(GIT_BRANCH)
	@echo "+ GIT SHA   : "$(GIT_SHA)
