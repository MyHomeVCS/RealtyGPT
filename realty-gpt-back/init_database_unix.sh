#!/bin/bash

# Проверка на наличие параметров
if [ "$#" -ne 3 ]; then
    echo "Использование: $0 username password dbname"
    exit 1
fi

USERNAME=$1
PASSWORD=$2
DBNAME=$3

USER_EXISTS=$(sudo -u postgres psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='$USERNAME'")
if [ "$USER_EXISTS" == "1" ]; then
    echo "User '$USERNAME' already exist."
    exit 1
fi

DB_EXISTS=$(sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='$DBNAME'")
if [ "$DB_EXISTS" == "1" ]; then
    echo "Database '$DBNAME' already exist."
    exit 1
fi

CREATE_USER="CREATE USER $USERNAME WITH PASSWORD '$PASSWORD';"
CREATE_DB="CREATE DATABASE $DBNAME OWNER $USERNAME;"
GRANT_PRIVILEGES="GRANT ALL PRIVILEGES ON DATABASE $DBNAME TO $USERNAME;"

sudo -u postgres psql -c "$CREATE_USER"
sudo -u postgres psql -c "$CREATE_DB"
sudo -u postgres psql -c "$GRANT_PRIVILEGES"

echo "User and database created successfully."

# ./init_database.sh your_username your_password your_dbname
