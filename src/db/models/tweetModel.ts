import { InferAttributes , InferCreationAttributes , CreationOptional , Model, ForeignKey, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class Tweet extends Model <InferAttributes<Tweet> , InferCreationAttributes<Tweet>>{
    declare id : CreationOptional<number>
    declare userId : ForeignKey<number>
    declare content : string 
}

Tweet.init({
    id : {type : DataTypes.INTEGER , primaryKey : true , autoIncrement : true},
    userId : {type : DataTypes.INTEGER , references : {model : "User" , key : "id"}},
    content : {type : DataTypes.STRING , validate : {len : [2 , 200]}}

},{
    tableName : "Tweet",
    sequelize : sequelize,
    timestamps : true
})

export default Tweet