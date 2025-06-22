import { InferAttributes , InferCreationAttributes , CreationOptional , Model, ForeignKey, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class FollowRequest extends Model <InferAttributes<FollowRequest> , InferCreationAttributes<FollowRequest>>{
    declare id : CreationOptional<number>
    declare userId : ForeignKey<number>
    declare requestedToFollowYou : ForeignKey<number>
}

FollowRequest.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , allowNull : false},
    userId : {type : DataTypes.INTEGER , references : {model : "User" , key : "id"}},
    requestedToFollowYou : {type : DataTypes.INTEGER , references : {model : "User" , key : "id"}}
},{
    tableName : "FollowRequest",
    sequelize : sequelize,
    timestamps : true
})

export default FollowRequest