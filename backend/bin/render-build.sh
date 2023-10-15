#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
echo "ログインします"
psql -U $DATABASE_USER -d $DATABASE