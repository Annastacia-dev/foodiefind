import React from "react";
import SideBar from "./SideBar";


const Settings = () => {
 
  return (
    <section className="flex gap-6">
      <SideBar />
      <div className="m-3 text-xl text-gray-900 font-semibold">
        SETTINGS
      </div>
    </section>
  );
};

export default Settings;