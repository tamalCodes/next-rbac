import User from "@/models/User.js";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// export const POST = async (request: any) => {
//   const { email, password,firstName, lastName } = await request.json();
//   await connect();

//   const existingUser = await User.findOne({ email });

//   if (existingUser) {
//     return new NextResponse("Email is already in use", { status: 400 });
//   }

//   const hashedPassword = await bcrypt.hash(password, 5);
//   console.log(hashedPassword);

//   const newUser = new User({
//     email,
//     password: hashedPassword,
//     firstName,
//     lastName,
//   });

//   try {
//     await newUser.save();
//     return new NextResponse("user is registered", { status: 200 });
//   } catch (err: any) {
//     return new NextResponse(err, {
//       status: 500,
//     });
//   }
// };

// try {
//   const { email, ...data } = req.body;
//   const existingUser = await User.findOne({ email });

//   if (existingUser) {
//     return res
//       .status(STATUSCODE.CONFLICT)
//       .json({ message: STATUSMESSAGE.USER_ALREADY_EXISTS });
//   }

//   const hashedPassword = await bcrypt.hash(data.password, 10);
//   const newUser = new User({
//     ...data,
//     email,
//     password: hashedPassword,
//   });
//   await newUser.save();
//   res
//     .status(STATUSCODE.CREATED)
//     .json({ message: STATUSMESSAGE.SIGNUP_SUCCESS });
// } catch (err) {
//   res.status(STATUSCODE.INTERNAL_SERVER_ERROR).json({ message: err });
// }

export async function POST(request: any) {
  try {
    const { email, ...data } = await request.json();
    await connect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse("User already exists", {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = new User({
      ...data,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("User saved");
    console.log(typeof hashedPassword);

    return new NextResponse("User registered", {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
}
