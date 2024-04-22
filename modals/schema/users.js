const mongoose=require("mongoose");

const Schema=mongoose.Schema;
const uniqueValidator=require("mongoose-unique-validator")

const UserSchema=new Schema({
    name:{type:String ,require:true},
    email:{type:String ,require:true, unique:true},
    password:{type:String ,require:true, minlength:6},
    image:{type:String ,require:true},
    address:{type:String ,require:true},
    orders:[{type:mongoose.Types.ObjectId ,require:true, ref:'Orders'}],
    products:[{type:mongoose.Types.ObjectId ,require:true, ref:'Product'}],

}); 
UserSchema.plugin(uniqueValidator)

module.exports=mongoose.model('User',UserSchema)