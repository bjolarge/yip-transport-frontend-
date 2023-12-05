"use client"
import React , {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';


const Planner = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    getDataTwo();
   // updatePost();
  }, [])
  const getDataTwo = () => {
    fetch("http://localhost:3002/planner").then((response) => response.json())
      .then((result) => {
        setdata(result)
      })
  }

  const router = useRouter()

  return (
   <div>
     <div className="fixed shadow-md sm:rounded-lg">
    {/* <h1 className='flex flex-col items-center mt-10'>Transportation Queue Management System</h1> */}
            <table className="w-full text-sm text-left text-gray-500">
            <caption className="caption-top font-bold uppercase">
     Planner.
  </caption>
                <thead className='text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white'>
                    <tr>
                    <th scope="col" className="px-6 py-3">SeventhDate</th>                        
                        <th scope="col" className="px-6 py-3 bg-blue-500">Slot1</th>
                        <th scope="col" className="px-6 py-3">Slot2</th>
                        <th scope="col" className="px-6 py-3 bg-blue-500">Slot3</th>
                        <th scope="col" className="px-6 py-3">Slot4</th>                        
                        <th scope="col" className="px-6 py-3">createdAt</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user,index)=>{
                            return <tr key={index}>
                            {/* <td>{user.id}</td> */}
                            <td className='bg-gray-500 text-white'>{user.updatedAt}</td>
                            <td>{user.Slot1}</td>
                            <td className='bg-gray-500 text-white'>{user.Slot2}</td>
                            <td>{user.Slot3}</td>
                            <td className='bg-gray-500 text-white'>{user.Slot4}</td>
                            <td>{user.createdAt}</td>
          
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
   </div>
  )
}

export default Planner