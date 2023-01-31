import React from "react";
import SideBar from "./SideBar";


const Diary = () => {
 
  return (
    <section className="flex gap-6">
      <SideBar />
      <div className="m-3 text-xl text-gray-900 font-semibold">
        DIARY 
      </div>
    </section>
  );
};

export default Diary;