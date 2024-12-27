import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { useState } from 'react'

// const reactElement = {
//     type:'a',
//     props: {
//         href:'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit googlw'
// }

// const areactElement = React.createElement(
//     'a',
//     {
//         href:'https://www.google.com',
//         target: '_blank'
//     },
//     'Click to visit google'
// )


createRoot(document.getElementById('root')).render(

    <App/>

)
