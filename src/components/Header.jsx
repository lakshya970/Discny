import React, { useState } from "react";
import logo from "./../assets/image/logo.png";
import { AiFillHome } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiStar } from "react-icons/hi";
import { HiPlayCircle } from "react-icons/hi2";
import { HiTv } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import { HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import prson from "./../assets/image/prson.png";
function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: AiFillHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiTv,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between mx-6 p-2 ">
        <div className="flex gap-5">
          <img
            src={logo}
            alt="image"
            className="w-[80px] md:w-[110px] object-cover"
          />
          <div className=" hidden md:flex md:gap-4">
            {menu.map((item) => (
              <HeaderItem name={item.name} Icon={item.icon} />
            ))}
          </div>
          <div className="flex gap-5 md:hidden">
            {menu.map(
              (item, index) =>
                index < 3 && <HeaderItem name={" "} Icon={item.icon} />
            )}
            <div className="flex md:hidden" onClick={() => setToggle(!toggle)}>
              <HeaderItem name={" "} Icon={HiDotsVertical} />
              {toggle ? (
                <div className=" absolute mt-16 bg-slate-900 px-6 py-6 border-[1px] border-gray-500 rounded-md mr-5">
                  {menu.map(
                    (item, index) =>
                      index > 2 && (
                        <HeaderItem name={item.name} Icon={item.icon} />
                      )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div>
          <img
            src={prson}
            alt="image"
            className="w-[35px] md:w-[42px]  cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
