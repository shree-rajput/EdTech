// import { model } from "mongoose"

//  we have 3 roles 
// 1. Admin
// 2. Teacher
// 3. Student

// Admin 
// can create teacher and student accounts
// assign courses to teachers
// and manage the overall system.

// Teacher
// can create and manage courses
// can create and manage assignments
// can grade assignments
// can communicate with students
// can create the online classes
// mark the attendence with unique class code and stundet code 

// Student
// can enroll in courses
// can view course materials
// can submit assignments
// can view grades
// can communicate with teachers
// can attend online classes

// start with 

// model 
//  user {
//     name : String , 
//     email : String ,
//     password : String ,
//     role : enum ('Admin' , 'Techer' , 'Student')
//  }
// class {
//     name : 
//     course : ref to course
//     teacher : ref to user
//     students : array of ref to user
//     classCode : String
// }

// course{
//     name : String
//     description : String
//     teacher : ref to user
//     students : array of ref to user
// }

