import logging
from argparse import ArgumentParser

from fastapi import FastAPI
from modules.event.application.container import ApplicationContainer as EventContainer
from modules.event.presentation.graphql import query
from modules.event.presentation.graphql.query import Query
from strawberry import Schema
from strawberry.fastapi import GraphQLRouter

logger = logging.getLogger()


def get_args():
    parser = ArgumentParser()
    parser.add_argument("--host", help="The HTTP host to listen", type=str, default="0.0.0.0")
    parser.add_argument("--port", help="The HTTP port to listen", type=int, default=8000)
    parser.add_argument("--log-level", help="Log level", type=str, default="info")
    parser.add_argument(
        "--workers",
        help="Number of workers to handle HTTP requests",
        type=int,
        default=2,
    )
    parser.add_argument("--debug", help="Activate debug", action="store_true")
    parser.add_argument("--reload", help="Activate reload (only for dev)", action="store_true")
    return parser.parse_args()


def build_api():
    app = FastAPI()

    schema = Schema(
        query=Query,
    )
    graphql_app = GraphQLRouter(schema)

    app.include_router(graphql_app, prefix="/graphql")

    container = EventContainer()
    container.wire(modules=[query])
    app.container = container

    return app
