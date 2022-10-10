import React from "react";
import { useLoaderData } from "react-router-dom";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Statistics = () => {
  const statistics = useLoaderData().data;
  return (
    <div className="justify-center px-4 mx-auto lg:max-w-7xl md:flex md:px-8 my-10">
      <div>
        <h1 className="text-center text-2xl text-emerald-400 font-bold mb-7">
          Total Quiz Data Pie Chart
        </h1>
        <ResponsiveContainer width={400} height={400}>
          <PieChart>
            <Pie
              data={statistics}
              dataKey="total"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={200}
              fill="#72e2ae"
              label
            />
            <Tooltip></Tooltip>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
