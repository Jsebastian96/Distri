import mongoose from 'mongoose' 

const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required :true,
        trim: true 
    },
    email:{
        type: String,
        required:true,
        trim:true,
        unique:true
    },
    phone: {
        type: Number,
        required: true,
      },

    password:{
        type:String,
        required:true
    }    
})

export default mongoose.model('User',userSchema)