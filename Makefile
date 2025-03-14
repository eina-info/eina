# Paths
PYTHONPATH := "./server:./server/src"

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
	@uv sync --all-groups --project ./server
	@echo "$(OK_COLOR)==>$(NO_COLOR) Dependencies installed"

server-test-unit:
	@echo "$(OK_COLOR)==>$(NO_COLOR) Running server unit tests"
	@PYTHONPATH=$(PYTHONPATH) uv run python -m pytest server/tests/unit --cov ./server/src --cov-report=xml -vvvv --disable-warnings

server-test-integration:
	@echo "$(OK_COLOR)==>$(NO_COLOR) Running server integration tests"
	@PYTHONPATH=$(PYTHONPATH) uv run python -m pytest server/tests/integration --cov ./server/src --cov-report=xml -vvvv --disable-warnings --cov-append

server-test:
	server-test-unit
	server-test-integration

run:
	@echo "$(OK_COLOR)==>$(NO_COLOR) Running application in docker"
	@$(DC) up

lint-server:
	@echo "$(OK_COLOR)==>$(NO_COLOR) Linting server"
	@PYTHONPATH=$(PYTHONPATH) ruff check
