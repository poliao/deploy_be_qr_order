import React, { Component ,useEffect} from 'react'
import SiteBar_Menage from '../components/SiteBar_Menage'
import Food from '../assets/board/food.png'
import Edit from '../assets/board/edit.svg'
import Delete from '../assets/board/delete.svg'
import Bar from '../assets/board/bar.svg'
import axios from "axios"



export const serviceBoard = () => {

  useEffect(() => {
    axios.get('http://localhost:8080/admin/menus').then(res => {
        console.log(res.data)
    })
    })


    return (
      <div className='board-menage'>
           <div className='Main-Navbar rounded-b-2xl shadow-xl sm:hidden '>
        <div className='container-sm'>
              <div className='pt-14 pb-10 '>
              <div className='grid justify-stretch'>
                  <img src={Bar} alt=""  />
                  <div className='justify-self-center'>
                     <div>
                       <div className='flex justify-center'>เมนู</div>
                   
                     </div>
                  </div>
              </div>
              </div>
           </div>
        </div>
       <div className='flex'> 
        <SiteBar_Menage />
        <div className='m-6 bg-white w-full rounded-md p-6'>
          <div className='sm:flex hidden  justify-between'>
            <div className='flex'>
              <img src={Bar} alt="" className='me-6 xl:hidden' />
              <div className='text-3xl font-bold '>เมนู</div>
              </div>
      
            </div>

          <div className='sm:flex  p-6 shadow-xl rounded-xl'>
            <div className='flex justify-center'><img src={Food} alt="" className='rounded-xl w-full' /></div>
            <div className='sm:ms-6 sm:flex sm:justify-between w-full'>
             <div>
                <div className='sm:text-2xl text-md mt-3 sm:mt-0 flex justify-center text-nowrap font-bold'>ชื่ออาหาร</div>
                <div className='mt-3 ms-3 text-sm'>
                  <ul className='list-disc'>
                    <li>รายละเอียด</li> 
                    <li>รายละเอียด</li>
                    <li>รายละเอียด</li>
                  </ul>
                </div>
             </div>
             <div className='flex justify-between w-full sm:justify-end  gap-3  sm:items-end mt-3 text-white'>
               <button className=' w-full py-2 rounded-md sm:w-1/3 blue-back'>เริ่มเตรียม</button>
               <button className='orange-back w-full py-2 sm:w-1/3  rounded-md '>แจ้งลูกค้า</button>
             </div>
            </div>
          </div>



        
        
        
       
        </div>
       </div>
      </div>
    )
  }


export default serviceBoard