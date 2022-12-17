import { useState } from "react";


export const Day2=()=> {
  const [value, setValue] = useState("");

  const lines = value.replace(/\r/g, "").trim().split("\n").map((line)=> line.split(" "))

  const moves = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  const mapInput = {
    A: moves.rock,
    B: moves.paper,
    C: moves.scissors,
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
  };
  
  const score=(opponentMove, ourMove)=>{
    if (opponentMove === ourMove){return ourMove +3}
    if( (opponentMove === moves.rock && ourMove === moves.paper) ||
    (opponentMove === moves.paper && ourMove === moves.scissors) ||
    (opponentMove === moves.scissors && ourMove === moves.rock)){
      return ourMove +6
    }
    else return ourMove
  }

  const part1=()=>{
    const outcomes = lines.map((line)=>{
      const opponentMove= mapInput[line[0]];
      const ourMove = mapInput[line[1]];
      return score(opponentMove, ourMove);
    })
    return outcomes.reduce((a, b) => a + b, 0)
  }
  const solution = {
    A: {
      X: moves.scissors, 
      Y: moves.rock, 
      Z: moves.paper, 
    },
    B: {
     
      X: moves.rock,
      Y: moves.paper,
      Z: moves.scissors,
    },
    C: {
    
      X: moves.paper,
      Y: moves.scissors,
      Z: moves.rock,
    },
  };
  const part2=()=>{
    const outcomes = lines.map((line)=> {
      const opponentMove = mapInput[line[0]];
      const ourMove = solution[line[0]][line[1]];

    return score(opponentMove, ourMove);
    })
    return outcomes.reduce((a, b) => a + b, 0)
  }

  return (
    <div className="h-screen w-screen bg-slate-400 text-slate-800">
      <div className=" p-10 max-h-fit text-5xl font-bold border-solid border-black border-2">
        Advent of Code day two
      </div>
      <div className="flex  justify-around p-36 ">
        <div className="flex gap-5">
          <h1 className="text-2xl p-4 font-bold">Rock Paper Scissors</h1>
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
          <p >{part1()}</p>
        </div>
        <div className="flex flex-col gap-6 p-5">
          <h3 className="text-xl font-semibold">Part Two</h3>
          <p>{part2()}</p>
        </div>
      </div>
    </div>
  );
}

