

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserNavigation = ({userName}) => {
  return (
    <div className='navSection'>
    <div className="title">
      <Link href="/" className="link">
        <Image src='/uploads/logo.png' alt="Holiday-Resort" height={95} width={120}/>
      </Link>
    </div>
   
    <div className="contact">
        Call now : 1800-889-5522
    </div>
    <Link href="/invoice" className='link'>
    <div className="bookings">
      Bookings: 
    </div>
    </Link>
    <p>Welcome: 
      <span style={{color:'yellow', marginLeft:'5px', fontSize:'1.2rem', border:'none'}}>
      {userName}
      </span>
       </p>
    <Link href="/api/auth/signout" className='link'>
    <div className="logout">
        Logout
    </div>
    </Link>
</div>
  )
}

export default UserNavigation
