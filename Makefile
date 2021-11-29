ifndef VERBOSE
MAKEFLAGS += --no-print-directory
endif

SHELL:=/bin/bash


.PHONY: build
serve:
	@yarn start

.PHONY: build
build:
	@yarn build

.PHONY: build
deploy:
	@firebase deploy --only hosting:huma-docs

.PHONY: build
common/git-info:
	@echo "+ GIT Branch: "$(GIT_BRANCH)
	@echo "+ GIT SHA   : "$(GIT_SHA)
