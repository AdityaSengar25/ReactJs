import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

console.log("App is running")

function MyApp(){ // there can be functions initialised here but it causes cluttereing and is a bad practice
    return (
        <div>
            <h1>Custom App | Rjs</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "Rjs"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement // this is a evaluated expression 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement //its an object so it is stated as it(like javascript) is like this instead of in tags or like function parenthesis
)

