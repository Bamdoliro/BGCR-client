import "./index.scss";
import "./App.scss";
import Section from "./components/Section/Section";
import Header from "./components/Header/Header";
import TapBar from "./components/Section/TapBar/TapBar";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <div className={"App".concat(isDark ? " background-dark" : "")}>
        <Header />
        <TapBar />
        <Section />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
