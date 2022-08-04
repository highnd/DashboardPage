import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../../assets/avatar.jpg";
import { Card, Chat, Notification, UserProfile } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import NavButton from "../../designTools/NavButton";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const {
    isActiveMenu,
    setisActiveMenu,
    handleClick,
    isClicked,
    setisClicked,
  } = useStateContext();

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title={"Menu"}
        customFunc={() => {
          setisActiveMenu(!isActiveMenu);
        }}
        icon={isActiveMenu ? <MdOutlineCancel /> : <AiOutlineMenu />}
        color={"blue"}
        dotColor={""}
      />

      <div className="flex">
        <NavButton
          title={"Card"}
          customFunc={() => {
            handleClick("isCard");
          }}
          icon={<FiShoppingCart />}
          color={"blue"}
          dotColor={""}
        />
        <NavButton
          title={"Chat"}
          customFunc={() => {
            handleClick("isChat");
          }}
          icon={<BsChatLeft />}
          color={"blue"}
          dotColor={"#03c9d7"}
        />
        <NavButton
          title={"Notfication"}
          customFunc={() => {
            handleClick("isNotification");
          }}
          icon={<RiNotification3Line />}
          color={"blue"}
          dotColor={"#03c9d7"}
        />
        <TooltipComponent content={"Profile"} position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {
              handleClick("isUserProfile");
            }}
          >
            <img src={avatar} className="rounded-full w-8 h-8" alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold text-14 ml-1 tracking-wide">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.isChat && <Chat />}
        {isClicked.isCard && <Card />}
        {isClicked.isUserProfile && <UserProfile />}
        {isClicked.isNotification && <Notification />}
      </div>
    </div>
  );
};

export default Navbar;
