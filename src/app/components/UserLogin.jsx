

"use client"

import React, { useState } from 'react'
import { loginAction } from '../serverActions/loginAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import bgImage from '../../../public/background.jpg'
import Image from 'next/image';
import { Circles } from 'react-loader-spinner'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
     const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const loginHandler = async(e)=>{
        e.preventDefault()
        setLoading(true)
        const loginDetails = {email, password}
        console.log(loginDetails)

        try {
          const response = await loginAction(loginDetails)
          if(response.success){
                router.push("/")
          }else{
            setError(response.message || "login failed, Invalid Credentials");
          }
        } catch (error) {
            setError("Invalid Credentials")
        }finally{
          setLoading(false)
        }
    }


  return (
<div >
<Image
        src="/background.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={75} 
        priority 
    />
<div className='formContainer'>
{
  loading ? (
    <>
    <Circles
  height="80"
  width="80"
  color="white"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </>

  ):(
    <>
      <form onSubmit={loginHandler} className='formSection' >
      <h1>Login</h1>
           {error && <p style={{color:'red'}}>{error}</p> }
            <h3>Email</h3>
            <input type="email" name='email' className='text-black' onChange={(e)=>setEmail(e.target.value)} />
            <h3 className="mb-1 font-medium">Password</h3>
           <div className="relative w-full ml-20">
             <input
               type={showPassword ? "text" : "password"}
               name="password"
               className="text-black border px-3 py-2 pr-12 rounded w-full
                          focus:outline-none focus:ring-2 focus:ring-blue-500"
               onChange={(e) => setPassword(e.target.value)}
             />
           
            <button
             type="button"
             onClick={() => setShowPassword(!showPassword)}
             className="icon-button absolute right-32 top-1/2 -translate-y-1/2 text-black"
           >
             {showPassword ? (
               <FaEye size={18} className="text-black" />
             ) : (
               <FaEyeSlash size={18} className="text-black" />
             )}
           </button>
           
           </div>
            <br /><br />
            <button type='submit'>Login</button>
        <Link href="/register" className='authLink'>
         If not registered? Regiter
        </Link>
        </form>
    </>
  )
}
     
    </div>
</div>
  )
}

export default UserLogin
