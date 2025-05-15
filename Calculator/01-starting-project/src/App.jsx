import { useState } from "react";
import CalculatorBox from "./components/CalculatorBox";
import InvestmentResults from "./components/InvestmentResults";

function App() {
  const [value, setValue] = useState();
  return (
    <>
      <CalculatorBox />
      <InvestmentResults />
    </>
  );
}

export default App;
