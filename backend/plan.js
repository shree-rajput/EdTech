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


// Bilkul bhai 💯 — main tujhe **clean, structured, industry-level backend blueprint** dubara de raha hoon
// 👉 Roles + Access + Routes + Controllers + kis ke liye hai (ALL IN ONE)

// ---

// # 🧠 🎯 EDTECH BACKEND — COMPLETE STRUCTURE

// ---

// ## 👥 ROLES (very important)

// | Role        | Access                                       |
// | ----------- | -------------------------------------------- |
// | **Student** | Courses dekh sakta hai, enroll kar sakta hai |
// | **Teacher** | Course create/update/delete                  |
// | **Admin**   | Sab control (users + courses)                |

// ---

// # 🔐 AUTH MODULE

// ### 📁 Controller: `auth.controller.js`

// | Method | Route                  | Access | Work          |
// | ------ | ---------------------- | ------ | ------------- |
// | POST   | `/api/auth/register`   | Public | User register |
// | POST   | `/api/auth/login`      | Public | Login         |
// | POST   | `/api/auth/verify-otp` | Public | OTP verify    |

// ---

// # 👤 USER MODULE

// ### 📁 Controller: `user.controller.js`

// | Method | Route               | Access                | Work                  |
// | ------ | ------------------- | --------------------- | --------------------- |
// | GET    | `/api/users/me`     | Student/Teacher/Admin | Apni profile          |
// | GET    | `/api/users/:id`    | Admin                 | Kisi bhi user ka data |
// | PUT    | `/api/users/update` | Logged-in user        | Profile update        |

// ---

// # 📘 COURSE MODULE

// ### 📁 Controller: `course.controller.js`

// | Method | Route              | Access        | Work          |
// | ------ | ------------------ | ------------- | ------------- |
// | POST   | `/api/courses`     | Teacher       | Course create |
// | GET    | `/api/courses`     | Public        | All courses   |
// | GET    | `/api/courses/:id` | Public        | Single course |
// | PUT    | `/api/courses/:id` | Teacher       | Update course |
// | DELETE | `/api/courses/:id` | Teacher/Admin | Delete course |

// ---

// # 🎓 ENROLLMENT MODULE

// ### 📁 Controller: `enrollment.controller.js`

// | Method | Route                    | Access        | Work          |
// | ------ | ------------------------ | ------------- | ------------- |
// | POST   | `/api/enroll`            | Student       | Course enroll |
// | GET    | `/api/enroll/my-courses` | Student       | My courses    |
// | GET    | `/api/enroll/:courseId`  | Teacher/Admin | Students list |

// ---

// # 💳 PAYMENT MODULE (optional but powerful)

// ### 📁 Controller: `payment.controller.js`

// | Method | Route                       | Access  | Work           |
// | ------ | --------------------------- | ------- | -------------- |
// | POST   | `/api/payment/create-order` | Student | Create payment |
// | POST   | `/api/payment/verify`       | Student | Verify payment |

// ---

// # 🛠️ ADMIN MODULE (optional)

// ### 📁 Controller: `admin.controller.js`

// | Method | Route                 | Access | Work        |
// | ------ | --------------------- | ------ | ----------- |
// | GET    | `/api/admin/users`    | Admin  | All users   |
// | DELETE | `/api/admin/user/:id` | Admin  | Delete user |
// | GET    | `/api/admin/courses`  | Admin  | All courses |

// ---

// # 🧩 FINAL FOLDER STRUCTURE

// ```id="n9y59m"
// backend/
//  ├── controller/
//  │    ├── auth.controller.js
//  │    ├── user.controller.js
//  │    ├── course.controller.js
//  │    ├── enrollment.controller.js
//  │    ├── payment.controller.js
//  │
//  ├── routes/
//  │    ├── auth.routes.js
//  │    ├── user.routes.js
//  │    ├── course.routes.js
//  │    ├── enrollment.routes.js
//  │
//  ├── middleware/
//  │    ├── auth.middleware.js
//  │    ├── role.middleware.js
//  │
//  ├── model/
//  ├── server.js
// ```

// ---

// # 🔥 MIDDLEWARE LOGIC (IMPORTANT)

// ### ✅ Auth Middleware

// 👉 Check JWT → user logged in hai ya nahi

// ---

// ### ✅ Role Middleware

// ```js id="i2c4pn"
// if(user.role !== "teacher") {
//   return res.status(403).json({ message: "Access denied" });
// }
// ```

// ---

// # 🚀 FLOW SAMJH LE (VERY IMPORTANT)

// 👉 Example:

// * Student login → `/auth/login`
// * Courses dekhe → `/courses`
// * Enroll kare → `/enroll`

// 👉 Teacher:

// * Course banaye → `/courses (POST)`

// 👉 Admin:

// * Users manage kare → `/admin/users`

// ---

// # 💯 FINAL ADVICE (REAL INDUSTRY TIP)

// 👉 Controllers = logic
// 👉 Routes = endpoint mapping
// 👉 Middleware = security

// 👉 Ye 3 cheez strong → backend solid 🔥

// ---

// ## ❓ Next Step

// Bhai ab tu bole:

// 👉 “mujhe auth controller ka full code de”
// YA
// 👉 “middleware ka code de”

// Main tujhe **ready-to-use code** de dunga (copy paste level 🚀)
