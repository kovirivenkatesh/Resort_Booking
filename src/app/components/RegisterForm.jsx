
'use client'

import React, { useState } from 'react'
import { registerAction } from '../serverActions/registerAction';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Circles } from 'react-loader-spinner'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)



  const router = useRouter()

  const registerHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    const userRegisterDetails = { username, email, password }
    console.log(userRegisterDetails)

    try {
      const response = await registerAction(userRegisterDetails);
      if (response.success) {
        alert("Registration success")
        router.push("/login")
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.log(error)
      setError("An unexpected error occurred");
    } finally {
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
          ) : (<>
            <form onSubmit={registerHandler} className='formSection' >
              <h1 style={{ borderBottom: '1px solid white' }} className="rTitle">Register </h1>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <h3>Username</h3>
              <input type="text" name='username' className='text-black' onChange={(e) => setUsername(e.target.value)} />
              <h3>Email</h3>
              <input type="email" name='email' className='text-black' onChange={(e) => setEmail(e.target.value)} />

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
              <button type='submit'>Register</button>
              <Link href="/login" className='authLink'>
                Already Registered? Login
              </Link>
            </form>

          </>)
        }

      </div>
    </div>
  )
}

export default RegisterForm
