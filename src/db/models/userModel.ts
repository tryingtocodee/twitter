import { InferAttributes , InferCreationAttributes , CreationOptional , Model, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class User extends Model<InferAttributes<User> , InferCreationAttributes<User>>{
    declare id : CreationOptional<number>
    declare username : string
    declare password : string
    declare profilePic? : string
    declare backgroundProfilePic? : string
    declare email : string 
    declare verification? : boolean
    declare verificationToken? : string 
    declare profileStatus? : "public" | "private"
    declare bio? : string
}

User.init({
    id : {type : DataTypes.INTEGER , primaryKey : true , autoIncrement : true},
    username : {type : DataTypes.STRING , allowNull : false},
    password : {type : DataTypes.STRING , allowNull : false},
    email : {type : DataTypes.STRING , unique : true , allowNull : false},
    profilePic : {type : DataTypes.STRING , defaultValue : null},
    backgroundProfilePic : {type : DataTypes.STRING , defaultValue : null},
    verification : {type : DataTypes.BOOLEAN , defaultValue : false},
    verificationToken : {type : DataTypes.STRING , defaultValue : null},
    profileStatus : {type : DataTypes.ENUM("public" , "private") , defaultValue : "public"},
    bio :  {type : DataTypes.STRING  , defaultValue : null}
},{
    tableName : "User",
    sequelize : sequelize,
    timestamps : true
})

export default User

//todo update migrations file