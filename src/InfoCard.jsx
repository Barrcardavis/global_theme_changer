import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function InfoCard() {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    padding: "1rem",
    marginTop: "1rem",
    borderRadius: "8px",
    background: theme === "dark" ? "#222" : "#f2f2f2",
    color: theme === "dark" ? "white" : "black",
  };

  return (
    <div style={cardStyle}>
      <h2>Info Card Component</h2>
      <p>This component also updates when the theme changes.</p>
    </div>
  );
}
