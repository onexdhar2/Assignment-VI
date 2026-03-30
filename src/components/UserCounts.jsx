import React from "react";

const UserCounts = ({ userCounts }) => {
  return (
    <section className="flex justify-evenly text-center items-center bg-[#4F39F6] mt-20 pt-14 pb-14">
      {userCounts.map((userIndex) => (
        <div key={userIndex.id}>
          <p className="font-bold text-white text-6xl mb-5">
            {userIndex.userCount}
          </p>
          <p className="text-white text-2xl">{userIndex.userTitle}</p>
        </div>
      ))}
    </section>
  );
};

export default UserCounts;
