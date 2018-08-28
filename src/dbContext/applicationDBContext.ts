import {Sequelize} from 'sequelize-typescript';

const sequelize = new Sequelize({
    username: 'sa',
    password: 'tenpearls',
    database: 'database_development',
    host: 'localhost',
    dialect: 'mssql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    modelPaths: [__dirname + '../entity']
});