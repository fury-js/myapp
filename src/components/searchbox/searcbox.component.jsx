import React from "react";
import "./searchbox.style.css";

export const SearchBox = ({placeholder}) => (
    <nav class="navbar navbar-dark bg-dark">
        <div className="ma4 mt0 ">
            <div className= 'd-flex'>
                {/* <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">Pick up location</label>
                </div> */}
                <input 
                    className="pa3 ma3 flex-row form-control p-2 bd-highlight" 
                    type="search" 
                    placeholder="Pick up Location" 
                />
                <input 
                    class="pa3 ma3 flex-row form-control" 
                    type="search" 
                    placeholder="Pick up date" 
                    aria-label="Search"/>
                <input 
                    class=" pa3 ma3 flex-row form-control" 
                    type="search" 
                    placeholder="Pick up time" 
                    aria-label="Search"/>
                <button class="ma3 btn btn-outline-success" type="submit">Search</button>
            </div>
        
        </div>
    </nav>
);