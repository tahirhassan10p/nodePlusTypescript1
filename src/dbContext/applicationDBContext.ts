import "reflect-metadata";
import {createConnection} from "typeorm";

export const connection = async () => {
    return await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "admin",
        database: "test",
        entities: [
            "../entity/**/*.ts"
         ],
         migrations: [
            "../migration/**/*.ts"
         ],
         subscribers: [
            "../subscriber/**/*.ts"
         ],
        synchronize: true,
        logging: false
    });
};