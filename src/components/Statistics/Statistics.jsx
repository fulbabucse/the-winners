import React from "react";
import { useLoaderData } from "react-router-dom";
import { Pie, PieChart, Tooltip } from "recharts";

const Statistics = () => {
  const statistics = useLoaderData().data;
  return (
    <div className="justify-center px-4 mx-auto lg:max-w-7xl md:flex md:px-8 my-10">
      <div>
        <h1 className="text-center text-2xl text-emerald-400 font-bold">
          Total Quiz Data Pie Chart
        </h1>
        <PieChart width={730} height={500}>
          <Pie
            data={statistics}
            dataKey="total"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#8884d8"
            label
          />
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
