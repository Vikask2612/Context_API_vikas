import React, { useContext } from 'react'
import { DataContext } from './context/UserContext'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

    const data = useContext(DataContext)

  return (
    <>
    <div>App {data}</div>
    <Header/>
    <Footer/>
    </>
  )
}

export default App