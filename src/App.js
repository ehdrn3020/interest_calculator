import { useState } from 'react';
import Header from './components/Header/Heder';
import Form from './components/UserInput/Form';
import Table from './components/Tables/Table';

function App() {
  const [results, setResults] = useState(null);

  // From Submit 시 실행
  const calculateHandler = (userInput) => {    
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // 저축 금액 계산
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setResults(yearlyData);
    console.log(results);
  };

  return (
    <div>
      <Header />
      
      <Form onCalculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Table />
      
    </div>
  );
}

export default App;
