import React, { useState, useContext } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard, MdAutoGraph } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart, AiOutlineStar, AiFillBook, AiOutlineComment } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/user";


const SideBar = () => {

    const { user } = useContext(UserContext);

    const menus = [    
        { name: "Home", link: "/home", icon: MdOutlineDashboard },
        { name: "Profile", link: "/profile", icon: AiOutlineUser },
        { name: "Wishlist", link: "/wishlist", icon: AiOutlineStar },
        { name: "Diary", link: "/diary", icon: AiFillBook },
        { name: "Reviews", link: "/reviews", icon: AiOutlineComment },
        { name: "Activity", link: "/activity", icon: MdAutoGraph },
        { name: "Favourites", link: "/favourites", icon: AiOutlineHeart },
        { name: "Settings", link: "/settings", icon: RiSettings4Line },
        { name: "Logout", link: "/logout", icon: FiLogOut, margin: true}
      ];
      const [open, setOpen] = useState(true);


  return (
    <div>
         <div
        className={`bg-[#FF416C] min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex items-center gap-3">
                <img src={user ? user.profile_picture : "https://www.w3schools.com/howto/img_avatar.png"} alt="profile" className="w-10 h-10 rounded-full object-cover" />
                <h2 className="text-lg font-semibold">@{user?.username}</h2>
            </div>
        <div className="mt-4 flex flex-col gap-4 relative">    
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-100 hover:bg-opacity-10 rounded-md transition-all duration-500 cursor-pointer text-gray-100`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar