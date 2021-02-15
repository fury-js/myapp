import axios from "axios";
import React from "react";
import Dropdown from "../dropdown/dropdown.component";

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth_token: '',
            countries: [],
            userCountry: '',
            phoneCode: '',
            email: '',
            name: '',
            userState: '',
            userCity: ''
        }
    }
    componentDidMount (){
        fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
            method: 'get',
            headers: {'Content-Type': 'application/json',
                    'api-token': '_ZAIgydglIZcUCKZq7zDR3k7nx4CJuFGECalMABqGXW458FHIRHbI5jz4dl0eMNuuxs',
                    'user-email': 'dennis.colussi2486@outlook.com'}
        })
        .then(response => response.json())
        .then(token => {
            const auth_token = Object.values(token)
            this.setState({auth_token: auth_token})
            // console.log(this.state.auth_token)
        })
        // this.getLocales()
        fetch('https://www.universal-tutorial.com/api/countries', {
            method:'get',
            headers: {'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJkZW5uaXMuY29sdXNzaTI0ODZAb3V0bG9vay5jb20iLCJhcGlfdG9rZW4iOiJfWkFJZ3lkZ2xJWmNVQ0tacTd6RFIzazdueDRDSnVGR0VDYWxNQUJxR1hXNDU4RkhJUkhiSTVqejRkbDBlTU51dXhzIn0sImV4cCI6MTYxMzM1MTc0OX0.WyxN1_0PwZlFxT7qsaLQOsXx2C3LQODuEd2RUG6mexY",
            'Content-Type': 'application/json',}
        })
        .then(response => response.json())
        .then(allcountries => this.setState({countries: allcountries}))
    }
    // async getLocales () {
    //     const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    //     targetUrl = 'http://partners.api.skyscanner.net/apiservices/reference/v1.0/locales?apikey=prtl6749387986743898559646983194'
    //     const res = await axios.get(proxyUrl + targetUrl)
    //     const data = res.data
    //     const newArray = Object.values(data)
    //     this.setState({countries: newArray})
    //     console.log(this.state.countries[0])
    // }
    
    onNameChange = (e) => {
        this.setState({name: e.target.value})

    }
    // onInputChange = (e) => {
    //     this.setState({userCity: e.target.value})
    //     // console.log(this.state.userCity)

    // }
    setUserCountry = (item) => {
        this.setState({userCountry: item})
        console.log(this.state.userCountry)

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
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure" accept-charset="utf-8">
                            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                            <div className="mt3">
                            <div className="mt3">
                                    <label className="db fw1 lh-copy f6" htmlFor="email-address">Name</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="text" 
                                        name="name"  
                                        id="name"
                                        
                                    />
                                </div>
                                <div>
                                    <Dropdown title = 'Select your country' 
                                        countries={this.state.countries}
                                        setUserCountry={this.setUserCountry}
                                        userCountry = {this.state.userCountry}
                                    />
                                </div>
                                <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                />
                            </div>
                            </fieldset>
                            <div className="mt3">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
                            type="submit" value="Register"/>
                            </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;