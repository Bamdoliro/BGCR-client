import "./index.scss";
import "./App.scss";
import Section from "./components/Section/Section";
import Header from "./components/Header/Header";
import TapBar from "./components/Section/TapBar/TapBar";
import { ThemeContext } from "./context/ThemeContext";
import { TabContext } from "./context/TabContext";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [radioValue, setRadioValue] = useState("ALL");

  return (
    <div className={"App".concat(isDark ? " background-dark" : "")}>
      <TabContext.Provider value={{ radioValue, setRadioValue }}>
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
          <Header />
          <TapBar />
          <Section />
        </ThemeContext.Provider>
      </TabContext.Provider>
    </div >
  );
}

export default App;
