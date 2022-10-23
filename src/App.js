import React, { useState } from 'react';
import './App.css';

const items = require('./data.js');

function App() {
  var item = Array.from(items);
  let study = item.sort(() => 0.5 - Math.random())[0];
  // console.log(study);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnChangeNameClick = () => {
    let index = activeIndex;

    if (index === study.length - 1) index = 0;
    else index++;

    setActiveIndex(index);
  };
  return (
    <div>
      <div className='bg-zinc-800 min-h-screen flex flex-col justify-center items-center text-center'>
        <h1 className='text-4xl text-blue-500 mb-2'>Study Buddy</h1>
        <p className='text-zinc-400 text-xl mb-4'>
          Spend 30 minutes learning today's topic
        </p>
        <h2 className='text-2xl text-white mb-4 font-bold'>{study}</h2>
        <button
          onClick={handleOnChangeNameClick}
          className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mb-4'
        >
          Change topic
        </button>
      </div>
    </div>
  );
}

export default App;
