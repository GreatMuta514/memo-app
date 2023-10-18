#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
PGPASSWORD=$DATABASE_PASSWORD psql -h $DATABASE_HOST.singapore-postgres.render.com -U $DATABASE_USER $DATABASE -c 'create table if not exists memos (id serial, content varchar(50))'
