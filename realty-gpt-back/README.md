
## Description

need to write some desc.

## Setup

### init database

**Attention!** you should fill values of `your_username`, `your_password` and `your_dbname` fields in your .env file

#### Linux 

```bash
$ sudo chmod +x init_database.sh 
```

```bash
$ sudo ./init_database.sh your_username your_password your_dbname
```

#### Windows
1. Open PowerShell as an administrator.
2. Set the execution policy to allow script execution by running
    ```shell
    Set-ExecutionPolicy RemoteSigned
    ```
3. Run the script with the necessary parameters:
    ```bash
    .\init_database_windows.ps1 -Username your_username -Password your_password -DbName your_dbname
    ```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

```bash
# watch mode
$ npm run start:dev
```

```bash
# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
