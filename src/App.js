import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
// Global Styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
  const [cardChecked, setCardChecked] = useState(false);
  return (
    <div className="App">
      <GlobalStyles />
      <Home cardChecked={cardChecked} setCardChecked={setCardChecked} />
    </div>
  );
}

export default App;
