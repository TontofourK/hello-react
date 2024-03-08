import { useState } from 'react'
// import './ColourChanger'

function App() {
  const [color, setColor] = useState('pink');

  // function RandomColorButton() {
  //   const [color, setColor] = useState('#FFFFFF'); // Initial background color

  //   // Function to generate a random color
  //   const generateRandomColor = () => {
  //     const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generating random hexadecimal color code
  //     setColor(randomColor);
  //   };
    
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'>
          <button onClick= {() => setColor('lightGray')} className='outline-none bg-white px-4 py-1 rounded-full shadow-lg text-red-400'>
            Red
          </button>
          <button onClick= {() => setColor('lightBlue')} className='outline-none bg-white px-4 py-1 rounded-full shadow-lg text-black'>
            Blue
          </button>
          <button onClick= {() => setColor('SteelBlue')} className='outline-none bg-white px-4 py-1 rounded-full shadow-lg text-black'>
            More Blue
          </button>
          {/* <button onClick= {generateRandomColor} className='outline-none bg-white px-4 py-1 rounded-full shadow-lg text-black'>
            Random
          </button> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
