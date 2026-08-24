import React, { useEffect } from "react";
import Home from "./pages.js/Home";
// Global Styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
