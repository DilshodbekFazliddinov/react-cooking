import React from "react";
import { useTheme } from "../hooks/useThemeHook";
import { FaMoon } from "react-icons/all";
import { BiSun } from "react-icons/all";
const colors = ["#262A56", "#B8621B", "#EA5455"];
function ColorHunt() {
  const { color, changeColor, changeMode, mode } = useTheme();
  return (
    <div className="dark:bg-slate-700">
      <div className="max-w-screen-lg mx-auto p-6">
        <div className="flex justify-between items-center">
          <div className="text-3xl cursor-pointer">
            {mode === "light" && (
              <FaMoon
                onClick={() => {
                  changeMode("dark");
                }}
              />
            )}
            {mode === "dark" && (
              <BiSun
                onClick={() => {
                  changeMode("light");
                }}
              />
            )}
          </div>
          <div className="flex gap-2">
            {colors.map((color) => {
              return (
                <span
                  onClick={() => changeColor(color)}
                  key={color}
                  className="inline-block cursor-pointer"
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: color,
                  }}
                ></span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorHunt;
