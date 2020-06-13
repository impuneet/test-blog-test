import './layout.scss'
import React from 'react'

const activeStyles = {
    background: '#00ff7f',
    padding: '5px',
    border: '2px #00ff7f solid'
}


export default ({ children }) => (
    render = { data => (
        <div className='container'>
            {children}
        </div>
    )}
);