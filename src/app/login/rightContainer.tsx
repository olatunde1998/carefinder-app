"use client";

import Image from "next/image";
import { auth, provider } from "../components/firebase/firebase";
import Input from "../components/input/input";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { BiHide, BiShow } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
// toast.configure()

export default function RightContainer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);


  const successNotifying = () =>{
    toast("Login Successful", {position: toast.POSITION.TOP_RIGHT})
  }
  const errorNotifying = () =>{
    toast.error("Invalid Email/Password", {position: toast.POSITION.TOP_RIGHT})
  }

  const logInWithEmailAndPassword = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const name: string | null = userCredential.user.displayName;
        const email = userCredential.user.email;
        const profilePicture: string | null = userCredential.user.photoURL;

        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("profilePicture", profilePicture);
        successNotifying()
        router.push("/carefinder");
        

      })
      .catch((error) => {
        console.log(error);
        errorNotifying()
      });
  };

  const signUpWithGoogleAuthentication = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);

        const name: string | null = result.user.displayName;
        const email = result.user.email;
        const profilePicture: string | null = result.user.photoURL;

        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("profilePicture", profilePicture);

        

        router.push("/carefinder");
      })
      .catch((error) => {
        console.log(error);
        errorNotifying()

      });
  };
  // console.log(localStorage.getItem("name"))
  return (
    <div className="px-4 py-20 text-[#1F4D36] w-full md:w-1/2  flex flex-col justify-center items-center">
      {/* <p className="text-center text-[32px] mb-10 md:hidden ">CareFinder App</p> */}
      <div className="px-4 w-full lg:w-[90%] xl:w-[60%]">
        <p className="text-center text-[32px] ">Welcome Back!</p>
        <p className="text-center">Login to your account</p>

        <form onSubmit={logInWithEmailAndPassword}>
          <div className="mt-4">
            <Input
              inputIcon
              label=" Your Email"
              type="email"
              placeholder="Enter your email"
              inputValue={email}
              onChangeValue={(e: any) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4 relative">
            <Input
              inputIcon
              label="Your Password"
              // type="password"
              type={`${show ? "text" : "password"}`}
              placeholder="Enter your password"
              inputValue={password}
              onChangeValue={(e: any) => setPassword(e.target.value)}
            />
            <span
                className="absolute bottom-2 right-2 pt-4 flex items-center mr-[0.25rem] text-[#FF8447]"
                onClick={() => setShow(!show)}
              >
                <BiHide
                  size={25}
                  className={
                    show === false
                      ? "hidden items-center cursor-pointer"
                      : "text-gray-500"
                  }
                />
                <BiShow
                  size={25}
                  className={
                    show === true
                      ? "hidden items-center cursor-pointer"
                      : "text-gray-500"
                  }
                />
              </span>
          </div>

          {/* <div className=" mt-4"> */}
          <button className="px-8 py-3 cursor-pointer transition duration-700 ease-in-out mt-4 bg-[#1F4D36] text-[20px] text-white rounded-lg w-full hover:bg-white hover:text-[#1F4D36] hover:border-[#1F4D36] border-[.01rem]">
            Log in
          </button>
          {/* </div> */}
        </form>

        {/* Google Authentication container */}
        <div
          className="mt-4  py-1 rounded-lg flex items-center justify-center cursor-pointer border-[#1F4D36] border-[.01rem]"
          onClick={signUpWithGoogleAuthentication}
        >
          <div>
            <Image
              src="/images/google.png"
              width={100}
              height={100}
              alt="doctor pics"
              className="w-[20px] h-[20px] "
            />
          </div>

          <p className="py-1 ml-4">Sign in with Google</p>
        </div>
         {/* Already have an account  */}
         {/* <div onClick={notifying}>test toast</div> */}
         <div className="mt-8">
          <p className="text-center ">
            Don&apos;t have an account yet?{" "}
            <Link href="/signup" className="ml-4">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}
