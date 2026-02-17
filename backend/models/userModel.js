import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
});
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
//flow 1 model then controller then route then index.js