import { Schema } from "mongoose";
import mongoose from "mongoose";
import {User} from './user.model.js';

const MeetingSchema = new Schema({
    userid : {type : String},
    meetingCode : {type : String , required : true},
    date : {type : Date , default : Date.now , required : true} 
});

const Meeting = mongoose.model("Meeting", MeetingSchema);
export {Meeting};