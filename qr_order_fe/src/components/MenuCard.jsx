import React from 'react';
import Menu1 from '../assets/topMenu-img/menu-1.png';

const MenuCard = (props) => {
    return (
        <div >
               <div className="mt-3">
        
        <div className="mb-2" >
          <div
            className="flex"
            style={{
              borderRadius: "12px",
              border: "1px solid rgb(0, 0,0, 25%)",
            }}
          >
            <img onClick={props.onClick} src={Menu1} alt="" className="rounded-s-xl" />
            <div className="p-3 w-full h-full">
              <div className="font-bold lg:text-lg">{props.name}</div>
              <div className="text-xs md:text-sm lg:text-sm">
                {props.detail}
              </div>
              <div className="flex justify-between mt-3">
                <div className="text-xs md:text-sm orange-text lg:text-sm">
                 {props.price}
                </div>
                <div className="flex items-center">
                  <button
                    className="rounded-md"
                 
                    style={{
                      border: "1px solid #C5C5C5",
                      width: "28px",
                      height: "28px",
                    }}
                  >
                    -
                  </button>
                  <div className="mx-3">1</div>
                  <button
                    className="rounded-md orange-text"
            
                    style={{
                      border: "1px solid #FF724C",
                      width: "28px",
                      height: "28px",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
    </div>
        </div>
    );
}

export default MenuCard;
