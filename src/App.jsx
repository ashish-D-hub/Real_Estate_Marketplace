import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignOut from './pages/SignOut';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    {/* <div>
      <h1 className='text-red-500'>Real_State_Marketplace</h1>
    </div> */}

    <Header/>

    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/SignOut' element={<SignOut/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Profile' element={<Profile/>}/>
     
       
    </Routes>
    </BrowserRouter>
  )
}

export default App


















// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
// console.log('hello ashish'); // console ninja is not working

//   return (
//     <>
//     <h2>
//       Hello Ashish
//     </h2>
      
//       <h1>Let's start with Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
