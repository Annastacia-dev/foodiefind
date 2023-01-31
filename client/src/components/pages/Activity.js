import React from "react";
import SideBar from "./SideBar";


const Activity = () => {
 
  return (
    <section className="flex gap-6">
      <SideBar />
      <div className="m-3 text-xl text-gray-900 font-semibold">
        ACTIVITY 
      </div>
    </section>
  );
};

export default Activity;