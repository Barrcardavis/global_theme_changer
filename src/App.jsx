import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import InfoCard from "./InfoCard";
import Footer from "./Footer";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <h1>Global Theme Switcher</h1>

      <ThemeSwitcher />

      {/* Additional component using the theme */}
      <InfoCard />

      {/* Footer goes LAST in the layout */}
      <Footer />
    </div>
  );
}

