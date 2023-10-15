#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
echo "ログインします"
echo $DATABASE_HOST.singapore-postgres.render.com
PGPASSWORD=$DATABASE_PASSWORD psql -h $DATABASE_HOST.singapore-postgres.render.com -U $DATABASE_USER $DATABASE