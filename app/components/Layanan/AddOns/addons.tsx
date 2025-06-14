import React from "react";
import { addons } from "@/config/Addons";
import { HiCheckCircle, HiXCircle } from "react-icons/hi2";
import { Crown, Gem, Badge } from "lucide-react";

const renderIcon = (value: boolean) => {
  if (value) {
    return (
      <span className="flex justify-center text-green-500">
        <HiCheckCircle className="w-5 h-5 lg:w-7 lg:h-7 text-solutiongreen" />
      </span>
    );
  }
  return (
    <span className="flex justify-center text-red-500">
      <HiXCircle className="w-5 h-5 lg:w-7 lg:h-7 text-red" />
    </span>
  );
};

const Addons = () => {
  return (
    <section className="container px-5 mx-auto pb-28 max-w-7xl">
      <div className="overflow-x-auto border shadow-md rounded-xl">
        <table className="min-w-full text-sm md:text-base">
          <thead>
            <tr className="text-white bg-blueprimary">
              <th className="px-4 py-3 text-left ">Add Ons</th>
              <th className="px-4 py-3 text-center">
                <p className="flex items-center justify-center gap-2">
                  <Badge className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6" />
                  <span className="hidden lg:block">Basic</span>
                </p>
              </th>
              <th className="px-4 py-3 text-center">
                <p className="flex items-center justify-center gap-2">
                  <Gem className="w-5 h-5 text-bluecustom lg:w-6 lg:h-6" />
                  <span className="hidden lg:block text-bluecustom">Standard</span>
                </p>
              </th>
              <th className="px-4 py-3 text-center">
                <p className="flex items-center justify-center gap-2">
                  <Crown className="w-5 h-5 text-orangecustom lg:w-6 lg:h-6" />
                  <span className="hidden lg:block text-orangecustom">Premium</span>
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {addons.map(({ name, basic, standard, premium }, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-[#f0f8ff]`}
              >
                <td className="px-4 py-3 border">{name}</td>
                <td className="px-4 py-3 text-center border">
                  {renderIcon(basic)}
                </td>
                <td className="px-4 py-3 text-center border">
                  {renderIcon(standard)}
                </td>
                <td className="px-4 py-3 text-center border">
                  {renderIcon(premium)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Addons;
