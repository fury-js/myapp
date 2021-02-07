import React from "react";


export const Navbar = ({onRouteChange}) => {
    return (
        <div className="ma1 mt0">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <p class="nav-link active f5 link dim black pa3 pointer" 
                    id="home-tab" 
                    data-bs-toggle="tab" href="#home" 
                    role="tab" 
                    aria-controls="home" 
                    aria-selected="true"
                    onClick={() => onRouteChange('Search')}>Home</p>
                </li>
                <li class="nav-item" role="presentation">
                    <p className="nav-link active f5 link dim black pa3 pointer" 
                    id="profile-tab" data-bs-toggle="tab" href="#profile" 
                    role="tab" aria-controls="profile" 
                    aria-selected="false"
                    onClick={() => onRouteChange('findhotels')}>Find Hotels</p>
                </li>
                <li class="nav-item" role="presentation">
                    <p class="nav-link active f5 link dim black pa3 pointer" 
                    id="contact-tab" 
                    data-bs-toggle="tab" 
                    href="#contact" 
                    role="tab" aria-controls="contact" 
                    aria-selected="false"
                    onClick={() => onRouteChange('Search')}>Car Hire</p>
                    
                </li>
                
            </ul>
                <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                
            </div>
            
        </div>
                
    )
}

export default Navbar;