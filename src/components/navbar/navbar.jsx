import React from "react";


export const Navbar = ({onRouteChange}) => {
    return (
        <div className="ma1 mt0">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <p className="nav-link active f5 link dim black pa3 pointer" 
                    id="home-tab" 
                    data-bs-toggle="tab" href="#home" 
                    role="tab" 
                    aria-controls="home" 
                    aria-selected="true"
                    onClick={() => onRouteChange('home')}>Home</p>
                </li>
                <li className="nav-item" role="presentation">
                    <p className="nav-link active f5 link dim black pa3 pointer" 
                    id="profile-tab" data-bs-toggle="tab" href="#profile" 
                    role="tab" aria-controls="profile" 
                    aria-selected="false"
                    onClick={() => onRouteChange('findhotels')}>Find Hotels</p>
                </li>
                <li className="nav-item" role="presentation">
                    <p className="nav-link active f5 link dim black pa3 pointer" 
                    id="contact-tab" 
                    data-bs-toggle="tab" 
                    href="#contact" 
                    role="tab" aria-controls="contact" 
                    aria-selected="false"
                    onClick={() => onRouteChange('Search')}>Car Hire</p>
                    
                </li>
                
            </ul>
                <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                
            </div>
            
        </div>
                
    )
}

export default Navbar;