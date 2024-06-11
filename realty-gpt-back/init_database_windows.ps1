param (
    [string]$Username,
    [string]$Password,
    [string]$DbName
)

if (!$Username -or !$Password -or !$DbName) {
    Write-Host "Использование: .\create_pg_db.ps1 -Username <username> -Password <password> -DbName <dbname>"
    exit 1
}

# Проверка на существование пользователя
$userExists = psql -U postgres -tAc "SELECT 1 FROM pg_roles WHERE rolname='$Username'"
if ($userExists -eq 1) {
    Write-Host "Пользователь '$Username' уже существует."
    exit 1
}

# Проверка на существование базы данных
$dbExists = psql -U postgres -tAc "SELECT 1 FROM pg_database WHERE datname='$DbName'"
if ($dbExists -eq 1) {
    Write-Host "База данных '$DbName' уже существует."
    exit 1
}

# Команды для PostgreSQL
$createUser = "CREATE USER $Username WITH PASSWORD '$Password';"
$createDb = "CREATE DATABASE $DbName OWNER $Username;"
$grantPrivileges = "GRANT ALL PRIVILEGES ON DATABASE $DbName TO $Username;"

# Выполнение команд в PostgreSQL
psql -U postgres -c $createUser
psql -U postgres -c $createDb
psql -U postgres -c $grantPrivileges

Write-Host "Пользователь и база данных созданы успешно."
