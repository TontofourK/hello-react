import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const customElement = {
    type: "a",
    props:{
    href: "https://google.com", 
    target: '_blanc'
    },
    children: "click me pls"
}

function CustomApp(){
    return(
        <div>
            <h2>Custom React App</h2>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>click me figga</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me figger'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
