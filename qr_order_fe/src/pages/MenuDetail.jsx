import React, { useEffect,useState } from 'react';
import Menu from '../assets/menu-detail/menu.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import Count from '../components/count';
import axios from 'axios';
import { useParams } from 'react-router-dom';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const MenuDetail = () => {

    const {menuid} = useParams();
    const [menudata, setmenudate] = useState({
        namemenu: "",
        price: "",
        detailmenu: "",
        optionsmenu: [
            {
                option_name: "",
                optiondetail: [
                    {
                        optiondetail: ""
                    }
                ]
            }
        ]
    });

    useEffect(() => {
        axios.get('http://localhost:8080/admin/menus/' + menuid)
            .then(res => {
                setmenudate({
                    ...menudata,
                    namemenu: res.data.namemenu,
                    price: res.data.price,
                    detailmenu: res.data.detailmenu,
                    optionsmenu: res.data.optionsmenu,
                    option_name: res.data.option_name,
                    optiondetail: res.data.optiondetail,
                    optiondetail: res.data.optiondetail
                });
            });
    }, [menuid]);

    return (
        <div className='menuDetail'>

            
            <div>
                <div className='flex justify-center'>
                    <div className='btn-add-basket flex justify-center items-center'>
                        <ShoppingBasketIcon />
                        <div className='ms-3'>ใส่ตะกร้า</div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={Menu} alt="" className='menu-image' />
                    <div className='box-undo'>
                        <ArrowBackIcon className='text-xl' />
                    </div>
                    <div className="basket-box">
                      <div className='relative'> 
                        <ShoppingBasketIcon fontSize='large'/>
                        <div className='count-basket'>1</div>
                        </div>
                    </div>
                  <div className='flex justify-center'>
                        <div className="star-box px-4 py-2">
                                <StarIcon className='yellow-text' />
                                <div className='ms-3'>
                                    4.9
                                </div>
                                <div>/5</div>
                        </div>
                  </div>
                    
                </div>
                <div className='container-sm mt-3 food-detail'>
                    <div className='title font-bold'>{menudata.namemenu}</div>
                    <div className='flex justify-between text-xl mt-1'>
                        <div className='flex gap-2 orange-text '>
                            <div className='price'>{menudata.price}</div>
                            <div>บาท</div>
                            </div>
                        <div className='ms-3'>
                            <Count />
                        </div>
                    </div>
                  <div className='mt-3'>
                        <div className='sub-title '>
                            เกี่ยวกับเมนู
                        </div>
                        <div className='detail'>
                            {menudata.detailmenu}
                        </div>
                  </div>
                  
                  <div className='mt-5'>
                  {menudata.optionsmenu.map((option, index) => (
                <div key={index} className='sub-title'>
                    {option.option_name}
                    {option.optiondetail.map((detail, detailIndex) => (
                        <div key={detailIndex} className='flex justify-between sub-check'>
                            <div className='flex items-center text-sm text-gray-500 '>
                                {detail.optiondetail}
                            </div>
                            <Checkbox {...label} />
                        </div>
                    ))}
                </div>
            ))}
                  </div>
              
                    
                    
                </div>
            </div>
        </div>
    );
}

export default MenuDetail;
