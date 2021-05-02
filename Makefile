ifndef VERBOSE
MAKEFLAGS += --no-print-directory
endif

SHELL:=/bin/bash
PYTHON:=/usr/bin/env python3.8


serve:
	@source .venv/bin/activate && \
		mkdocs serve

common/venv:
	$(PYTHON) -m venv .venv && \
		source .venv/bin/activate && \
		pip install wheel

common/git-info:
	@echo "+ GIT Branch: "$(GIT_BRANCH)
	@echo "+ GIT SHA   : "$(GIT_SHA)
