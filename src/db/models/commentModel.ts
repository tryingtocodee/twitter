import { InferAttributes , InferCreationAttributes , CreationOptional , Model, ForeignKey, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class Comment extends Model<InferAttributes <Comment> , InferCreationAttributes<Comment>>{
    declare id : CreationOptional<number>
    declare tweetId : ForeignKey<number>
    declare content : string
}

Comment.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    tweetId : { type    : DataTypes.INTEGER , references : {model : "Tweet" , key : "id"}},
    content : {type : DataTypes.STRING , allowNull : false}
},{
    tableName : "Comment",
    sequelize : sequelize,
    timestamps : true
})

export default Comment