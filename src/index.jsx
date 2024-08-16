import React from 'react'
import ReactDOM from "react-dom"
import Header from './Components/Header/Header'
import "/src/index.css"
import Body from './Components/Body/Body'


const AppLayout = ()=>{
    return (
        <>
            <Header/>
            <Body/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
