import React from "react";


export const Navigation = ({onRouteChange}) => {
    return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('signin')}>Sign In</p>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('home')} >Home</p>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('register')} >Register</p>

            </nav>
                
    )
}

export default Navigation;