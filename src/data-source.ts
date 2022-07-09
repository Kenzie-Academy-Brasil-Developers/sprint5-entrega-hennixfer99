import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";

require("dotenv").config();

export const AppDataSource =  process.env.NODE_ENV === "test" ? new DataSource({
    type: "sqlite",
    database: ":memory:",
    entities: [User],
    synchronize: true,
  })
  :  
  new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,

    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD,
    database: process.env.POSTGRES_DB,

    synchronize: false,
    logging: true,
    entities:[User],
    migrations: ["src/migrations/*.ts"],
})
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

