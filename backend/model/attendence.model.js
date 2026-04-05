import mongoose from "mongoose";

const attendenceSchema = new mongoose.Schema({
   class : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Class",
    required : true
   } , 
   teacher :{
    type :mongoo
   },
   records : [
    {
        student : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        date : {    
            type : Date,
            required : true
        },
        status : {
            type : String, 
            enum : ["Present" ,"Absent" , "Late"]
    }}]
})

const Attendence = mongoose.model("Attendence" , attendenceSchema);

export default Attendence;