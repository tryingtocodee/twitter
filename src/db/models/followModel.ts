import { InferAttributes , InferCreationAttributes , CreationOptional , Model, ForeignKey, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class Followers extends Model<InferAttributes<Followers> , InferCreationAttributes<Followers>>{
    declare id : CreationOptional<number>
    declare userId : ForeignKey<number> 
    declare followingId : ForeignKey<number>
}

Followers.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    userId: {type : DataTypes.INTEGER , references : {model : "User" , key : "id"}},
    followingId : {type : DataTypes.INTEGER , references : {model : "User" , key : "id" }}

},{
    tableName : "Followers",
    sequelize : sequelize,
    timestamps : true
})

export default Followers