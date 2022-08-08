import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, Spark } from "../../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../../assets/dummy";
import { useStateContext } from "../../context/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="md:mt-2 mt-16 flex flex-col justify-center items-center md:ml-6 items-top">
      <article className="md:flex">
        <div className="flex flex-wrap lg:flex-nowrap ">
          <div className="  dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-max w-full p-8 pt-9 m-3 mt-8 bg-hero-pattern bg-gradient-to-t from-green-500 to-slate-600 bg-no-repat bg-cover bg-center">
            <div className="flex justify-center flex-col items-start">
              <p className="text-white text-md">Earnings</p>
              <p className=" text-2xl font-bold gap-4 text-white">
                <span className="text-green-200 mr-[5px]">$</span>98,457,78
              </p>
              <div className="mt-6">
                <Button
                  color="white"
                  bgColor="bg-green-400"
                  text="Download"
                  borderRadius="rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" m-3 mt-9 flex flex-wrap justify-center gap-3 items-center">
          {earningData.map((item, index) => (
            <div
              key={index}
              className="bg-white w-full dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4  rounded-xl"
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3 ">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span
                  className={`text-sm ml-2`}
                  style={{ color: item.pcColor }}
                >
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </article>

      <article>
        <section className="flex  items-center ">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl lg:w-[700px]  w-full flex justify-between ">
            <div className=" font-semibold text-xs md:text-xl mr-4">
              <p> Revenue Updates</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center text-gray-500 gap-2">
                <GoPrimitiveDot />
                <p>Expense </p>
              </div>
              <div className="flex items-center text-green-400 gap-2">
                <GoPrimitiveDot />
                <p>Budget</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10 md:flex gap-10   ">
          <article className="border-r-1 border-color m-4 pr-10">
            <div className="">
              <p>
                <span className=" text-xl font-semibold">55,455</span>
                <span className="p-1 text-xs m-2 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400">
                  25%
                </span>
              </p>
              <p className="text-gray-500 text-sm">Budget</p>
            </div>
            <div className="mt-8">
              <p>
                <span className=" text-xl font-semibold">55,455</span>
                <span className="p-1 text-xs m-2 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400">
                  25%
                </span>
              </p>
              <p className="text-gray-500 text-sm">Budget</p>
            </div>
            <div className="mt-5">
              <Spark
                currentColor="blue"
                id="line-sparkline"
                type="Line"
                height="80px"
                width="250px"
                color="blue"
                data={SparklineAreaData}
              />
            </div>
            <div className="mt-6">
              <Button
                color="white"
                bgColor="bg-cyan-400"
                text="Download"
                borderRadius="rounded-[5px]"
              />
            </div>
          </article>
          <article className="w-full h-full md:mt-4  mt-12">
            <Stacked height="300px" width="350px" />
          </article>
        </div>
      </article>
    </div>
  );
};

export default Ecommerce;
