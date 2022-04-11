import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import Navigation from './components/Navigation'
import Detail from './routes/Detail'

function App() {
  return (
    // <>
    //   <div>App</div>
    //   <Home></Home>
    //   <About></About>
    // </>    >> 이렇게쓰면 화면에 이게 다 나오는데,
              // 우리가 해야 되는건 메뉴 클릭하면 전체화면 바뀌게

    <BrowserRouter basename={process.env.PUBLIC_URL}> 
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/movie_detail' element={<Detail></Detail>}></Route>
      </Routes>
    </BrowserRouter> // 앞으로 얘가 전체감싸는 역할
                      // Route가 여러개 일때는 반드시 Routes로 묶어서 써야한다
  )
}

export default App