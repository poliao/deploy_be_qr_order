import React, { Component, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Search from "../assets/topMenu-img/search.svg";
import Table from '../assets/navbar-img/table.svg'

import MainFood from "../assets/topMenu-img/main-food.svg";
import Water from "../assets/topMenu-img/water.svg";
import Dessert from "../assets/topMenu-img/dessert.svg";
import Crown from "../assets/topMenu-img/crown.svg";
import Popular1 from "../assets/topMenu-img/popular1.png";
import Popular2 from "../assets/topMenu-img/popular2.png";
import Popular3 from "../assets/topMenu-img/popular3.png";
import Errow from "../assets/topMenu-img/errow-right.svg";
import Menu1 from "../assets/topMenu-img/menu-1.png";
import TableService from "../assets/service-home/table-service.png";



const ServiceHome = () => {
    return (
        <div>
              <div className='rounded-b-2xl shadow-xl bg-white mb-4 '>
        <div className='container-sm'>
              <div className='pt-14 pb-10'>
                  <div className='flex justify-between'>
                    <div className='flex'>
                      <img src={Table} className='me-3' alt="table" />
                      <div className='font-bold flex items-end whitespace-nowrap'>โต๊ะ 1</div>
                    </div>
                 
                  </div>
              </div>
           </div>
        </div>

        <div className="container-sm">
          <div className="flex">
            <input
              type="text"
              className="w-full py-2 ps-5 rounded-md"
              aria-label="search"
              title="search"
              placeholder="ค้นหา"
            />
            <button className="p-2 px-3 orange-back rounded-md">
              <img src={Search} alt="" />
            </button>
          </div>
        </div>

        <div
          className="category text-base mt-5"
          style={{ paddingLeft: "12px" }}
        >
          <div className="font-bold">หมวดหมู่</div>
          <div className="mt-2">
            <Swiper
              style={{ overflow: "hidden" }}
              spaceBetween={10}
              slidesPerView={2.7}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="flex items-center justify-center bg-white py-3 px-2 rounded-md">
                  <img src={MainFood} alt="" />
                  <div className="ms-3 font-bold">จานหลัก</div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex items-center justify-center bg-white py-3 px-2 rounded-md">
                  <img src={Water} alt="" />
                  <div className="ms-3 font-bold">น้ำ</div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex items-center justify-center bg-white py-3 px-2 rounded-md">
                  <img src={Dessert} alt="" />
                  <div className="ms-3 font-bold">ของหวาน</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="popular mt-5">
          <div className="container-sm">
            <div className="flex justify-center items-center">
              <div>
                <img src={Crown} alt="" className="pb-1" />
              </div>
              <div className="font-bold ms-1">ยอดนิยม</div>
            </div>
            <div className="flex mt-6">
              <div
                className="yellow-back yellow-glow rounded-xl me-2.5 w-full relative"
              >
                <img
                  src={Popular1}
                  className="absolute lg:w-40"
                  style={{ top: "-20px", left: "50%", transform: "translate(-50%, 0)" }}
                  alt=""
                />
                <div className="relative p-1.5" style={{ top: "70px" }}>
                  <div className="font-bold text-white whitespace-nowrap md:text-base  text-xs  lg:text-lg">
                    พานาคอตต้าเสาวรส
                  </div>
                  <div className="flex justify-between items-center">
                    <div className=" text-white  text-xs lg:text-sm">120</div>
                    <div>
                      <img src={Errow} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="yellow-back yellow-glow rounded-xl me-2.5 w-full relative"
              >
                <img
                  src={Popular2}
                  className="absolute lg:w-40"
                  style={{ top: "-20px", left: "50%", transform: "translate(-50%, 0)" }}
                  alt=""
                />
                <div className="relative p-1.5" style={{ top: "70px" }}>
                  <div className="font-bold text-white whitespace-nowrap text-xs  md:text-base  lg:text-lg">
                    พานาคอตต้าเสาวรส
                  </div>
                  <div className="flex justify-between items-center">
                    <div className=" text-white  text-xs lg:text-sm">120</div>
                    <div>
                      <img src={Errow} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="yellow-back yellow-glow rounded-xl w-full  relative" style={{ minHeight: "115px" }}
              >
                <img
                  src={Popular3}
                  className="absolute lg:w-40"
                  style={{ top: "-20px", left: "50%", transform: "translate(-50%, 0)" }}
                  alt=""
                />
                <div className="relative p-1.5" style={{ top: "70px" }}>
                  <div className="font-bold text-white whitespace-nowrap  text-xs  md:text-base lg:text-lg">
                    พานาคอตต้าเสาวรส
                  </div>
                  <div className="flex justify-between items-center">
                    <div className=" text-white  text-xs lg:text-sm">120</div>
                    <div>
                      <img src={Errow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu mt-5">
          <div className="container-sm">
            <div className="flex justify-between items-center">
              <div className="font-bold">รายการโต๊ะอาหาร</div>
              <div className="text-xs orange-text ">ดูทั้งหมด</div>
            </div>
            <div className="mt-3">

                <div className="mb-2">
                  <div
                    className="flex"
                    style={{
                      borderRadius: "12px",
                      border: "1px solid rgb(0, 0,0, 25%)",
                    }}
                  >
                    <img src={TableService} alt="" className="rounded-s-xl" />
                    <div className="p-3 w-full flex flex-col justify-between">
                    <div>
                          <div className="font-bold lg:text-lg">โต๊ะ 1</div>
                          <div className="text-xs md:text-sm lg:text-sm">
                            โต๊ะเหมาะสำหรับ 4 ท่าน
                          </div>
                    </div>
                      <div className="flex justify-end mt-3">
                       
                        <div className="flex items-end">
                          <button className="rounded-md px-5 py-1 text-xs md:text-sm lg:text-sm bg-green-700 text-white">ว่าง</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
           
            </div>
          </div>
        </div>

    
        </div>
    );
}

export default ServiceHome;
 