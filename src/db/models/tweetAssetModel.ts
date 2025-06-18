import { InferAttributes , InferCreationAttributes , Model , CreationOptional, ForeignKey, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class TweetAsset extends Model <InferCreationAttributes<TweetAsset> , InferAttributes<TweetAsset>>{
    declare id : CreationOptional<number>
    declare tweetId : ForeignKey<number>
    declare imageId : string
    declare imageUrl : string
    declare videoId : string 
    declare videoUrl : string
}

TweetAsset.init({
    id : {type : DataTypes.INTEGER , primaryKey : true , autoIncrement : true },
    tweetId : {type : DataTypes.INTEGER , references : {model : "Tweet" , key : "id"}},
    imageId : {type : DataTypes.STRING , defaultValue : null},
    imageUrl : {type : DataTypes.STRING , defaultValue : null},
    videoId : {type : DataTypes.STRING , defaultValue : null},
    videoUrl : {type : DataTypes.STRING , defaultValue : null}
} ,{
    tableName : "TweetAsset",
    sequelize : sequelize,
    timestamps : true
})

export default TweetAsset