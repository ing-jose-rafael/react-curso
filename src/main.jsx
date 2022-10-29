import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import { CounterApp } from './CounterApp'
import { GitExpertApp } from './GitExpertApp'
// import { FirstApp } from './FirstApp'

// import './index.css'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstApp title="Soy Goku!"/> */}
    {/* <CounterApp value={ 10 } /> */}
    <GitExpertApp/>
  </React.StrictMode>
)
