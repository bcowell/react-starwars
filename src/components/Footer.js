import React from 'react';

const topHalf = {
    background: '#282c34',
    paddingTop: '45px',
    paddingBottom: '25px',
    color: 'white',
}

const bottomHalf = {
    backgroundColor: '#20232a',
    color: 'white'
}

const Footer = () => 
    <>
    <div style={topHalf} >
        Top half
    </div>
    <div style={bottomHalf} >
        Footer
    </div>
    </>

export default Footer;