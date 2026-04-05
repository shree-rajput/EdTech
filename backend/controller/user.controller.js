import User from "../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const RegisterUser = async (req ,res) => {
    try{
         
        const {name , email , password , role } = req.body;

        if(!name || !email || !password || !role){
            return res.status(400).json({message : "All fields are required"});
        }

        const existingUser = await User.findOne({email : email});

        if(existingUser){
            return res.status(400).json({message : "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password , 10);
        
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

        const newUser = new User({
            name,
            email : email,
            Password : hashedPassword,
            Role : role , 
            otp : otp,
            otpExpiry : otpExpiry
        });
        console.log("OTP:", otp); 
        await newUser.save();
        return res.status(201).json({message : "User registered successfully"});
    }catch(err){
        return res.status(500).json({message : err.message});
    }
}


export const LoginUser = async (req , res) => {
    try{
      
          const {email , password} = req.body; 
            if(!email || !password){
                return res.status(400).json({message : "All fields are required"});
            }
            const user = await User.findOne({email : email});
            if(!user){
                return res.status(400).json({message : "Invalid credentials"});
            }

            if (!user.isVerified) {
  return res.status(400).json({ message: "Please verify your email first" });
}
            const isMatch = await bcrypt.compare(password, user.Password);
            if(!isMatch){
                return res.status(400).json({message : "Invalid credentials"});
            }
            const token = jwt.sign(
  { userId: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);
res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "strict"
});

return res.status(200).json({
  message: "Login successful"
});
            // return res.status(200).json({message : "Login successful"});

    }catch(err){
        return res.status(500).json({message : err.message});
    }
}


export const verifyotp = async(req,res) => {
   const {email , otp} = req.body;
   const user = await User.findOne({email});
   if(!user){
    return res.status(404).json({message : "User not found"});
   }
   if(user.otp !== otp){
    return res.status(400).json({message : "Invalid OTP"});
   }
    if(user.otpExpiry < new Date()){    
    return res.status(400).json({message : "OTP expired"});
   }
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();
    return res.status(200).json({message : "OTP verified successfully"});
}