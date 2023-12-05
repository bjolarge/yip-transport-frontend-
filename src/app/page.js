"use client"
import React , {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from '../app/page.module.css'
import Planner from '@/components/planner'


const Home = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    getData();
   // updatePost();
  }, [])
  const getData = () => {
    fetch("http://localhost:3002/customers").then((response) => response.json())
      .then((result) => {
        setdata(result)
      })
  }

  const router = useRouter()

  return (
    //<div>Home</div>
   <div className='flex flex-row space-x-3 w-48'>
    {/* <h1 className='mt-2'>Transportation Queue Management System</h1> */}

 <div className="flex shadow-md sm:rounded-lg mt-2 ml-2">
            <table className="w-full text-sm text-left text-gray-500 pl-2">
            <caption className="caption-top font-bold uppercase">
            Delivery List.
  </caption>
                <thead className='text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white'>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-blue-500">CustomerId</th>
                        <th scope="col" className="px-6 py-3">CustomerName</th>
                        <th scope="col" className="px-6 py-3 bg-blue-500">PickUpLocation</th>
                        <th scope="col" className="px-6 py-3">DropOfLocation</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user,index)=>{
                            return <tr key={index} className=''>
                            <td>{user.id}</td>
                            <td className='bg-gray-500 text-white'>{user.customerName}</td>
                            <td>{user.pickuplocation}</td>
                            <td className='bg-gray-500 text-white'>{user.dropOfLocation}</td>
          
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
          {/* <Planner/> */}
          <div className='flex flex-col mt-2'>
            <Planner/>
          </div>
{/* first to be commented out */}
        {/* <div className="relative shadow-md sm:rounded-lg w-48">
    <h1 className='flex flex-col items-center mt-10'>Transportation Queue Management System</h1>
            <table className="w-full text-sm text-left text-gray-500">
                <thead className='text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white'>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-blue-500">CustomerId</th>
                        <th scope="col" className="px-6 py-3">CustomerName</th>
                        <th scope="col" className="px-6 py-3 bg-blue-500">PickUpLocation</th>
                        <th scope="col" className="px-6 py-3">DropOfLocation</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user,index)=>{
                            return <tr key={index} className=''>
                            <td>{user.id}</td>
                            <td className='bg-gray-500 text-white'>{user.customerName}</td>
                            <td>{user.pickuplocation}</td>
                            <td className='bg-gray-500 text-white'>{user.dropOfLocation}</td>
          
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div> */}
   </div>
  )
}

export default Home