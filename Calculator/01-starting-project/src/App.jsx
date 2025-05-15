import { useState } from "react";

import CalculatorBox from "./components/CalculatorBox";
import InvestmentResults from "./components/InvestmentResults";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <CalculatorBox userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p>Please enter a duration greater than 0</p>}
      {inputIsValid && <InvestmentResults input={userInput} />}
    </>
  );
}

export default App;
