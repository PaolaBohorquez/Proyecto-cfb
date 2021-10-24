import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import "./globals.css";
import Header from "./header";
import TopCardList from "./top-card-list.js";
import Overview from "./overview.js";
import Switch from "./switch";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  // const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";
  const mainClass = darkMode ? "is-light-mode" : "is-dark-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        {/* <Switch
          setDarkMode={setDarkMode}
          checked={checked}
          setChecked={setChecked}
        /> */}
      </Header>
      <TopCardList />
      {/* <Overview /> */}
    </main>
  );
}
export default App;

// function App() {
//   return (
//     <>
//       <Header />
//       <TopCardList />
//     </>
//   );

//   // (
//   //   <main className={mainClass}>
//   //     <Header>
//   //       <Switch
//   //         setDarkMode={setDarkMode}
//   //         checked={checked}
//   //         setChecked={setChecked}
//   //       />
//   //     </Header>
//   //     <TopCardList />
//   //     <Overview />
//   //   </main>
//   // <div className="App">
//   //   <header className="App-header">
//   //     <img src={logo} className="App-logo" alt="logo" />
//   //     <p>
//   //       Hola Mundo Edit <code>src/App.js</code> and save to reload.
//   //     </p>
//   //     <a
//   //       className="App-link"
//   //       href="https://reactjs.org"
//   //       target="_blank"
//   //       rel="noopener noreferrer"
//   //     >
//   //       Learn React
//   //     </a>
//   //   </header>
//   // </div>
//   // );
// }

// export default App;
