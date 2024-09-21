import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=1')
        .then(response => response.json())
        .then(data2 => setData(JSON.stringify(data2)));
    // setTimeout(() => {
    //   setData(new Date().toString())
    // }, 1000);
  }, [])

  return (
    <>
      <p> { data } </p>
    </>
  )
}

export default App
