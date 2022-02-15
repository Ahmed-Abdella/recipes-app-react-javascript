import { useTheme } from "../hooks/useTheme";

//styles
import "./ThemeSelector.css";

const themeColors = ["#1C0C5B", "#03506F", "#363062"];

export default function ThemeSelector() {
  const { changeColor } = useTheme();
  return (
    <div className="theme-selector">
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
