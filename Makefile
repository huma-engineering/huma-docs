ifndef VERBOSE
MAKEFLAGS += --no-print-directory
endif

SHELL:=/bin/bash
PYTHON:=/usr/bin/env python3.8


serve:
	@source .venv/bin/activate && \
		mkdocs serve

build:
	@source .venv/bin/activate && \
		mkdocs build && \
		echo '+ static folder is `site`' && \
		echo '+ Also it can be serve by `python3 -m http.server -d ./site  8000`'

deploy:
	@firebase deploy --only hosting:huma-docs

common/venv:
	@$(PYTHON) -m venv .venv && \
		source .venv/bin/activate && \
		pip install wheel && \
		pip install -r requirements.txt

common/git-info:
	@echo "+ GIT Branch: "$(GIT_BRANCH)
	@echo "+ GIT SHA   : "$(GIT_SHA)
