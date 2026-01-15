import React from "react"

interface HeaderProps {
    image: {
        src: string
        alt: string
    }
    children?: React.ReactNode
    // Children is an optioanl prop
}

function Header({ image, children }: HeaderProps){
    return (
        <header>
            <img {...image} /> 
            {/* <img src={image.src} alt={image.alt} /> The code 
            up there is same as the code here */}
            {children}
        </header>
    )
}

export default Header;