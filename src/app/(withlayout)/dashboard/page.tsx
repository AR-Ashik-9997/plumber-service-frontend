import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Image
        src="https://i.ibb.co/hCdd7nd/flat-isometric-vector-design-68094-97-removebg-preview.png"
        className="block mx-auto"
        width={900}
        height={500}
        alt=""
      />
      <h1 className="text-center text-2xl md:text-4xl font-bold">
        Welcome to your Dashboard
      </h1>
    </div>
  );
};

export default Dashboard;
