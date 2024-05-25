import React, { useState } from 'react';
import useCurrencyInfo from './hooks/usecurrency';
import { InputBox } from './components/index';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/6774947/pexels-photo-6774947.jpeg?auto=compress&cs=tinysrgb&w=800)`
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrentChange={(currency) => setFrom(currency)}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-10 flex items-center justify-center my-2'>
              <button
                type='button'
                className='border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                amountDisable
                onCurrentChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                onAmountChange={(amount) => setConvertedAmount(amount)}
              />
            </div>
            <button
              type='submit'
              className='w-full py-2 bg-blue-600 text-white rounded-md mt-2'
            >
              Convert {from.toUpperCase()} to {to.toLocaleUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
