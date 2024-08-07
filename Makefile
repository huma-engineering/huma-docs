ifndef VERBOSE
MAKEFLAGS += --no-print-directory
endif

SHELL:=/bin/bash

run-local:
	yarn start

.PHONY: serve
serve: build
	@yarn start

.PHONY: build
build:
	@yarn build

.PHONY: deploy
deploy-live: 
	@firebase deploy --only hosting:huma-docs

.PHONY: deploy
deploy-preview: 
	@firebase deploy --only hosting:huma-docs-preview

.PHONY: build
common/git-info:
	@echo "+ GIT Branch: "$(GIT_BRANCH)
	@echo "+ GIT SHA   : "$(GIT_SHA)
