#!/bin/bash


set -e

cd $CONTEXT_DIR
echo "Building $CONTEXT_DIR"
docker build .
