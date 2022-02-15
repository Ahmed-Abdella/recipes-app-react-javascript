import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";

//styles
import "./ThemeSelector.css";

const themeColors = ["#E43F5A", "#16C79A", "#51C4D3"];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          onClick={toggleMode}
          alt="mode icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        ></img>
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
            className="color"
          ></div>
        ))}
      </div>
    </div>
  );
}
