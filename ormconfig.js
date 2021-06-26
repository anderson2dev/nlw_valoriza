require('dotenv').config({path: './POSTGRES_CONFIG.env'})

const conn = {
    "type": "postgres",
    "database": process.env.POSTGRES_DB,
    "username": process.env.POSTGRES_USER,
    "database": process.env.POSTGRES_DB,
    "password": process.env.POSTGRES_PASSWORD,
    "host": "localhost",
    "port": process.env.POSTGRES_PORT,
    "migrations": [
        "src/domain/database/migrations/*.ts",
    ],
    "entities": [
        "src/domain/database/entities/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/domain/database/migrations",
        "entitiesDir": "src/domain/database/entities"
    }

}

module.exports = conn;