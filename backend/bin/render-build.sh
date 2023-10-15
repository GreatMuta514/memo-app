#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
echo "ログインします"
touch /var/run/postgresql/.s.PGSQL.5432
psql -U $DATABASE_USER -d $DATABASE