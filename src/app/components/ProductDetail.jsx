



"use client"

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import CalenderComponent from '@/app/components/CalenderComponent'
import { bookingAction } from '../serverActions/bookingAction'
import { Circles } from 'react-loader-spinner'


import toast from 'react-hot-toast'

const DynamicProduct = () => {

  const router = useRouter();

  const [record, setRecord] = useState("")

  const [selecetedDates, setSelectedDates] = useState(null)

  const params = useParams();

  const { id } = params

  console.log("dynamic ClientId:", id)

  const dynamicProductHandler = async () => {

    const response = await fetch(`http://localhost:3000/api/admin/product/${id}`)
    const newData = await response.json()

    console.log("dynaic data:", newData)
    setRecord(newData.data)

  }

  useEffect(() => {
    dynamicProductHandler()
  }, [])

  const bookingHandler = async () => {
    if (!selecetedDates) {
      toast.error("Please select booking dates")
      return
    }

    const bookingDetails = { record, selecetedDates }
    try {
      const response = await bookingAction(bookingDetails)
      if (response.success) {
         toast.success("Booking Successfull")
        router.push('/invoice')
      }
    } catch (error) {

    }

  }

  const handleDateSelect = (bookingDates) => {
    setSelectedDates(bookingDates)
    console.log("Selected Dates:", bookingDates)
  }



  const getTotalDays = () => {
    if (!selecetedDates?.startDate || !selecetedDates?.endDate) return 0

    const start = new Date(selecetedDates.startDate)
    const end = new Date(selecetedDates.endDate)

    const diffTime = end - start
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays
  }

  const totalDays = getTotalDays();

  const totalPrice =
    totalDays > 0
      ? record.price * totalDays * (1 - record.offer / 100)
      : 0;

  return (
    <div>
      <CalenderComponent onDatesSelect={handleDateSelect} />
      <Link href="/">
        <button className='ml-20 border p-2 bg-green-500 rounded-md'>Go Back</button>
      </Link>
      {record ?
        (<div className="">
          <div className="singleSection">
            <div className="singleLeft">
              <div className="font-bold text-xl">
                <h2>{record.title}</h2>
              </div>
              <img src={record.image} alt={record.title} className="singleImage" />
            </div>
            <div className="singleCenter">
              <div className="singlePrice"> Rs.{record.price}</div><br />
              <p className="singleDesc"><span className='font-bold  text-lg'>Description:</span><br />{record.desc}</p>
              <br />
              <div className="">
                <span className='font-bold text-lg'>Amenities</span><br />
                {record.amen.map((item, i) => {
                  return (
                    <div className="singleAmen" key={i}>
                      <span>*</span> {item}
                    </div>
                  )
                })}
              </div>
              <div className="offer">
                <span>*</span>
                <button>  Discount {record.offer}%</button>
              </div>
              <div className="flex flex-row items-center gap-10 text-center mt-[50px]">
                <div className="px-6 py-[10px] font-semibold">
                  Total: ₹{totalPrice.toFixed(2)}
                  <p className="text-sm text-gray-600">
                    {totalDays} day(s) selected
                  </p>
                </div>



                <button
                  className="py-[10px] px-[50px] bg-green-600 border border-orange-500 text-white"
                  onClick={bookingHandler}
                >
                  Book Now
                </button>
              </div>


            </div>
          </div>

        </div>)
        : <h1 style={{ position: 'absolute', top: '50%', left: '50%' }}>    <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /></h1>}
    </div>
  )


}

export default DynamicProduct

