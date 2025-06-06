import React from "react";
import { addons } from "@/config/Addons";
import { HiCheckCircle, HiXCircle } from "react-icons/hi2";
import { Crown, Gem, Badge } from "lucide-react";

const renderIcon = (value: boolean) => {
  if (value) {
    return (
      <span className="text-green-500 flex justify-center">
        <HiCheckCircle className="w-5 lg:w-7 h-5 lg:h-7 text-solutiongreen" />
      </span>
    );
  }
  return (
    <span className="text-red-500 flex justify-center">
      <HiXCircle className="w-5 lg:w-7 h-5 lg:h-7 text-red" />
    </span>
  );
};

const Addons = () => {
  return (
    <section className="pb-28 container px-5 mx-auto max-w-7xl">
      <div className="overflow-x-auto rounded-xl shadow-md border">
        <table className="min-w-full text-sm md:text-base">
          <thead>
            <tr className="bg-blueprimary text-white">
              <th className="px-4 py-3 text-left  ">Fitur</th>
              <th className="px-4 py-3 text-center">
                <p className="flex justify-center items-center gap-2">
                  <Badge className="w-5 lg:w-6 h-5 lg:h-6 text-gray-500" />
                  <span className="hidden lg:block">Basic</span>
                </p>
              </th>
              <th className="px-4 py-3 text-center">
                <p className="flex justify-center items-center gap-2">
                  <Gem className="w-5 lg:w-6 h-5 lg:h-6 text-gray-500" />
                  <span className="hidden lg:block">Standard</span>
                </p>
              </th>
              <th className="px-4 py-3 text-center">
                <p className="flex justify-center items-center gap-2">
                  <Crown className="w-5 lg:w-6 h-5 lg:h-6 text-gray-500" />
                  <span className="hidden lg:block">Premium</span>
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
                <td className="border px-4 py-3">{name}</td>
                <td className="border px-4 py-3 text-center">
                  {renderIcon(basic)}
                </td>
                <td className="border px-4 py-3 text-center">
                  {renderIcon(standard)}
                </td>
                <td className="border px-4 py-3 text-center">
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
