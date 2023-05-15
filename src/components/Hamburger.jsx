import * as React from "react"

const Hamburger = ( {isOpen} ) => {
    return <>
        <div className="hamburger">
            <div className="burger burger1"></div>
            <div className="burger burger2"></div>
            <div className="burger burger3"></div>
        </div>

        <style>{`
            .burger1 {
                transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0deg)' };
            }
            .burger2 {
                transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)' };
                opacity: ${isOpen ? 0 : 1};
            }
            .burger3 {
                transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0deg)' };
        `}
        </style>
    </>
}

export default Hamburger;