import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize(
    process.env.DB_NAME ? process.env.DB_NAME : 'database',
    process.env.DB_USER ? process.env.DB_USER : 'root',
    process.env.DB_PASSWORD ? process.env.DB_PASSWORD : 'root',
    {
        host: process.env.DB_HOST ? process.env.DB_HOST : 'mysql-server',
        port: parseInt(process.env.DB_PORT as string)?? 3306 ,
        dialect: 'mysql'
    }
)
