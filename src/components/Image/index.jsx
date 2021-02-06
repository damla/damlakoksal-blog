import React from 'react'


const Image = ({children, ...props}) => (
    <>
        <br/>
        <div class="">
            <img src={img} width="800" height="200"/>
            <a href="https://trends.google.com/trends/explore?q=E-commerce%20website&geo=US">{children}</a>
        </div>
        <br/>
    </>
)

export default Image;