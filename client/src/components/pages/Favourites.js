import React from "react";
import SideBar from "./SideBar";


const Favourites = () => {
 
  return (
    <section className="flex gap-6">
      <SideBar />
      <div className="m-3 text-xl text-gray-900 font-semibold">
        FAVOURITES 
      </div>
    </section>
  );
};

export default Favourites;