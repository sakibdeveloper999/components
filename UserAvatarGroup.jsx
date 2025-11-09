import React from "react";

const UserAvatarGroup = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        className="border-2 border-white rounded-full h-16 w-16 -mr-6"
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt=""
      />
      <img
        className="border-2 border-white rounded-full h-16 w-16 -mr-6"
        src="https://randomuser.me/api/portraits/women/31.jpg"
        alt=""
      />
      <img
        className="border-2 border-white rounded-full h-16 w-16 -mr-6"
        src="https://randomuser.me/api/portraits/men/33.jpg"
        alt=""
      />
      <img
        className="border-2 border-white rounded-full h-16 w-16 -mr-6"
        src="https://randomuser.me/api/portraits/women/32.jpg"
        alt=""
      />
      <img
        className="border-2 border-white rounded-full h-16 w-16 -mr-6"
        src="https://randomuser.me/api/portraits/men/44.jpg"
        alt=""
      />
      <img
        className="border-2 border-white rounded-full h-16 w-16 -mr-6"
        src="https://randomuser.me/api/portraits/women/42.jpg"
        alt=""
      />
      <span className="flex items-center justify-center bg-white text-sm text-gray-800 font-semibold border-2 border-gray-200 rounded-full h-16 w-16">
        +999
      </span>
    </div>
  );
};

export default UserAvatarGroup;
