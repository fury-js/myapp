import React from "react";
import Dropdown from "../dropdown/dropdown.component";
import "./searchbox.style.css";

export class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Countries: [
                {
                    id: 0,
                    key: "AD",
                    name: "Andorra",
                    selected: false
                },
                {
                    id: 1,
                    key: "AE",
                    name: "United Arab Emirates",
                    selected: false
                },
                {
                    id: 2,
                    key: "AF",
                    name: "Afghanistan",
                    selected: false
                },
            ]
        }
    }
    resetThenSet = ( id ) => {
        const temp = this.state.Countries;
        console.log(temp)

        temp.forEach((item) => item.selected = false);
        temp[id].selected = true


        this.setState({
            Countries: temp,
        })

    }
    render () {
        return (
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
                    <Dropdown
                        title="Select location"
                        countries={this.state.Countries}
                        resetThenSet={this.resetThenSet} 
                    />
        
                </div>
            </nav>
        )
    }
}
export default SearchBox;
    
