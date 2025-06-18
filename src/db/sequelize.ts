import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    username :"mubeen_user",
    password : "my-password",
    database : "twitter",
    host : "127.0.0.1",
    dialect : "mysql"
})

export default sequelize