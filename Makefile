# Paths
PYTHONPATH := "$(shell pwd)/server/src:$(shell pwd)/server/src/modules"

# Docker Compose
DC := docker compose

# Colors
NO_COLOR    = \033[0m
OK_COLOR    = \033[32;01m
ERROR_COLOR = \033[31;01m
WARN_COLOR  = \033[33;01m

server-deps:
	@echo "$(OK_COLOR)==>$(NO_COLOR) Installing dependencies for server"
	@command -v uv >/dev/null 2>&1 || { echo "$(WARN_COLOR)==> uv is not installed. Installing...$(NO_COLOR)"; curl -LsSf https://astral.sh/uv/install.sh | sh; }
	@echo "$(OK_COLOR)==>$(NO_COLOR) Syncing dependencies"
	@cd server && uv sync && cd ..
	@echo "$(OK_COLOR)==>$(NO_COLOR) Dependencies installed"

server-test:
	@echo "$(OK_COLOR)==>$(NO_COLOR) Running tests for server"
	@PYTHONPATH=$(PYTHONPATH) uv run pytest server/tests/unit --cov ./server/tests --cov-report=xml -vvvv --disable-warnings

run:
	@echo "$(OK_COLOR)==>$(NO_COLOR) Running application in docker"
	@$(DC) up

lint:
	@echo "$(OK_COLOR)==>$(NO_COLOR) Linting server"
	@PYTHONPATH=$(PYTHONPATH) ruff check