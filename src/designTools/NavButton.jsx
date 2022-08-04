import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        onClick={customFunc}
        style={{ color: color }}
        className=" text-xl rounded-full p-6 h-8 w-8 hover:bg-light-gray flex justify-center items-center relative"
      >
        <span className="  ">
          <span
            style={{ background: dotColor }}
            className="absolute top-[3px] h-2 w-2 rounded-full"
          ></span>
          {icon}
        </span>
      </button>
    </TooltipComponent>
  );
};

export default NavButton;
