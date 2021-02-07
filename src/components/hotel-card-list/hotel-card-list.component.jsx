import React from "react";
// import { Card } from '../card/card.component';


export class HotelCardlist extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            query: '',
            locale: ''

        }
    }
    onLocationChange = (event) => {
        this.setState({query: event.target.value})

    }
    onCountryChange = (event) => {
        this.setState({locale: event.target.value})

    }
    onButtonSearch = () => {
        fetch(`https://hotels-com-free.p.rapidapi.com/suggest/v1.7/json?query=${this.state.query}&locale=${this.state.locale}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "85273bf954msh8784f59f18a8555p1de70ejsn0accb2cea582",
                "x-rapidapi-host": "hotels-com-free.p.rapidapi.com"
            },
            // body: JSON.stringify({
            //     query: this.state.query,
            //     locale: this.state.locale
            // })
        })
        .then(response => {
            console.log(response.json());
        })
        .catch(err => {
            console.error(err);
        });

    }
    // componentDidMount (){
    //     fetch(`https://hotels-com-free.p.rapidapi.com/suggest/v1.7/json?query=${this.state.query}&locale=${this.state.locale}`, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-key": "85273bf954msh8784f59f18a8555p1de70ejsn0accb2cea582",
    //             "x-rapidapi-host": "hotels-com-free.p.rapidapi.com"
    //         },
    //         // body: JSON.stringify({
    //         //     query: this.state.query,
    //         //     locale: this.state.locale
    //         // })
    //     })
    //     .then(response => {
    //         console.log(response.json());
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

    // }
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
                            onChange={this.onLocationChange}
                        />
                        <input 
                            class="pa3 ma3 flex-row form-control" 
                            type="search" 
                            placeholder="locale" 
                            aria-label="Search"
                            onChange={this.onCountryChange}/>
                        <input 
                            class=" pa3 ma3 flex-row form-control" 
                            type="search" 
                            placeholder="" 
                            aria-label="Search"/>
                        <button class="ma3 btn btn-outline-success" 
                        type="submit"
                        onClick={this.onButtonSearch}>Search</button>
                    </div>
                
                </div>
            </nav>
        )
    }

}