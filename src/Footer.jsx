import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer style={{
      marginTop: "2rem",
      padding: "1rem",
      textAlign: "center",
      opacity: 0.8,
      color: theme === "dark" ? "#ccc" : "#333"
    }}>
      Footer Component — Theme: {theme}
    </footer>
  );
}
