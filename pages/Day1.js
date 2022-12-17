import { useState } from "react";

export const Day1=()=> {
  const [value, setValue] = useState("");
  const elfCalories = value
    .split("\n\n")
    .map((elf) => {
      return elf
        .split("\n")
        .reduce((total, current) => total + Number(current.trim()), 0);
    })
    .sort((a, b) => b - a);
  return (
    <div className="h-screen w-screen bg-slate-400 text-slate-800">
      <div className=" p-10 max-h-fit text-5xl font-bold border-solid border-black border-2">
        Advent of Code day one
      </div>
      <div className="flex  justify-around p-36 ">
        <div className="flex gap-5">
          <h1 className="text-2xl p-4 font-bold">Calories</h1>
          <div className="flex flex-col">
            <textarea
              className="p-4 h-56 border-solid border-black border-2 rounded-md bg-slate-100 resize-none"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 p-5">
          <h3 className="text-xl font-semibold">Part One</h3>
          <p>{elfCalories[0]}</p>
        </div>
        <div className="flex flex-col gap-6 p-5">
          <h3 className="text-xl font-semibold">Part Two</h3>
          <p>{elfCalories[0] + elfCalories[1] + elfCalories[2]}</p>
        </div>
      </div>
    </div>
  );
}


