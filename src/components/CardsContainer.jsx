import React from "react";
import { Outlet } from "react-router-dom";
import { TopOfAnything } from "./TopOfAnything";

export const CardsContainer = ({ top }) => {
  return (
    <div className="bg-slate-600 pb-10">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-gray-800"
          >
            <circle
              fill="currentColor"
              fillOpacity="0.4"
              cx="44"
              cy="44"
              r="15.5"
            />
            <circle
              fillOpacity="0.1"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.1"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.1"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.1"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 ">
          <div className="col-span-2">
            <div className="relative grid gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
              {/* Each Cart Goes Here */}
              {top.map((item) => (
                <TopOfAnything key={item.mal_id} topItem={item} />
              ))}
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
