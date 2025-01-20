FROM python:3.12-slim-bullseye AS base
LABEL maintainer="eina"

# Get the latest version of uv
RUN apt-get update && apt-get install -y --no-install-recommends curl ca-certificates
ADD https://astral.sh/uv/install.sh /uv-installer.sh
RUN sh /uv-installer.sh && rm /uv-installer.sh
ENV PATH="/root/.local/bin/:$PATH"

### Install dependencies
WORKDIR /eina

COPY src bin pyproject.toml uv.lock ./

# Use the system Python environment and not create a venv
ENV UV_PROJECT_ENVIRONMENT="/usr/local/"
RUN uv sync --frozen --no-group lint --no-group test

CMD ["uvicorn", "api:build_api", "--host", "0.0.0.0", "--port", "8000"]
