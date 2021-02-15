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
            ],
            route: '',
            pickupDate: '',
            returnDate: '',
            pickupTime: ''
        }
    }
    // onRouteChange = (route) => {
    //     if(route === 'oneway') {
    //         return (this.setState({returnDate: '(One way)'})
    //         )

    //     }
    //     else if (route === 'home') {
    //       this.setState({returnDate: ''})
    //     }
    //     this.setState({route: route})
    // }
    onpickupDateChange = (event) => {
        this.setState({pickupDate: event.target.value})
    }
    onreturnDateChange = (event) => {
        this.setState({returnDate: event.target.value})
    }
    resetThenSet = ( id ) => {
        const temp = this.state.Countries;
        console.log(temp)

        temp.forEach((item) => item.selected = false);
        temp[id] = true


        this.setState({
            Countries: temp,
        })

    }
    render () {
        return (
            <nav class="navbar navbar-dark bg-dark">
                {/* <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check ma1 pa1" name="btnradio" id="btnradio1" autocomplete="off" onChange={this.onRouteChange('home'),console.log(this.state.returnDate)
                    }/>
                    <h6 className=" pa1">Return</h6>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onChange={()=> this.onRouteChange('oneway')}/>
                    <h6 className=" pa1">One Way</h6>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                    <h6 className=" pa1">Return</h6>
                </div> */}
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
                        <div className="relative">
                        <Dropdown
                        title="Select location"
                        countries={this.state.Countries}
                        resetThenSet={this.resetThenSet} 
                         /></div>
                        <input 
                            class="pa3 ma3 flex-row form-control" 
                            type="text" 
                            placeholder="Depart Date" 
                            aria-label="text"
                            onChange = {this.onpickupDateChange} />
                            {this.route === 'oneway'
                                ? <div>
                                    <input 
                                    class=" pa3 ma3 flex-row form-control" 
                                    type="text" 
                                    placeholder={this.route}
                                    aria-label="text"
                                    onChange= {this.onreturnDateChange}/>
                                </div>
                                :(
                                    this.route === 'return'
                                    ?
                                    <input 
                                    class=" pa3 ma3 flex-row form-control" 
                                    type="text" 
                                    placeholder="Return Date" 
                                    aria-label="text"
                                    onChange= {this.onreturnDateChange}/>
                                    :
                                    <input 
                                    class=" pa3 ma3 flex-row form-control" 
                                    type="text" 
                                    placeholder="Return Date" 
                                    aria-label="text"
                                    onChange= {this.onreturnDateChange}/>
                                )
                            }
                            
                        <input 
                            class=" pa3 ma3 flex-row form-control" 
                            type="text" 
                            placeholder="Return Date" 
                            aria-label="text"
                            onChange= {this.onreturnDateChange}/>
                        <button class="ma3 btn btn-outline-success" type="submit">Search</button>
                        
                    </div>
                    
        
                </div>
            </nav>
        )
    }
}
export default SearchBox;
    
