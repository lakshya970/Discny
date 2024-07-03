import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <>
      <div className="flex text-white items-center font-semibold gap-2 cursor-pointer text-[15px] hover:underline underline-offset-8 ">
        <Icon className="text-[20px] " />
        <h2 className="hidden md:block">{name}</h2>
        <h2 className="md:hidden ">{name}</h2>
      </div>
    </>
  );
}

export default HeaderItem;
