import HelloWorld from './components/HelloWorld'
import ReactDOM from 'react-dom'
import React from 'react'

const wrapper = document.getElementById("HelloWorld");

console.log(wrapper)

wrapper ? ReactDOM.render(<HelloWorld />, wrapper) : false;