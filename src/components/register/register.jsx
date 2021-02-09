import axios from "axios";
import React from "react";
import Select from 'react-select'

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localesCode: {},
            localesName: [],
            name: '',
            email: '',
            password: '',
            currencies: []
        }
    }
    componentDidMount (){
        this.getLocales()
        // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        // const targetUrl = 'http://partners.api.skyscanner.net/apiservices/reference/v1.0/locales?apikey=prtl6749387986743898559646983194'
        // fetch(proxyUrl + targetUrl ,{
        //     headers : { 
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //        }})
        // .then(resp => resp.json())
        // .then(data =>)
    }
    async getLocales () {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://partners.api.skyscanner.net/apiservices/reference/v1.0/locales?apikey=prtl6749387986743898559646983194'
        const res = await axios.get(proxyUrl + targetUrl)
        const data = res.data
        const newArray = Object.values(data)
        const newlocale = newArray.map(item => ({
            item
            // "label": Object.values(item)
        }))
        let a
        let b
        newlocale.forEach((item) => {
             a = item
            // console.log(x)
        })
    
        // console.log(a)
        this.setState({localesCode: a})
        console.log(this.state.localesCode)
        // for (const property in this.state.localesCode) {
        //     console.log(`${property}:${Object.values[this.state.localesCode]}`)

        // }
        // console.log(this.state.localesCode)
        // newArray.forEach(function(item){
        //     this.state = {
        //         locale: item
        //     }
        // })
        // console.log(this.state)

        

        // console.log(this.state.localesCode)
    }

    render () {
        return (
            <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure" accept-charset="utf-8">
                            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
                            <div class="mt3">
                            <div className="mt3">
                                    <label className="db fw1 lh-copy f6" htmlFor="email-address">Name</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                        type="text" 
                                        name="name"  
                                        id="name"
                                    />
                                </div>
                                <div>
                                    <Select options={this.state.localesCode}/>
                                </div>
                                <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
                                <input class="pa2 input-reset ba bg-transparent w-100 measure" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                />
                            </div>
                            <div class="mt3">
                                <label class="db fw4 lh-copy f6" for="password">Password</label>
                                <input class="b pa2 input-reset ba bg-transparent" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                />
                            </div>
                            </fieldset>
                            <div class="mt3">
                            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
                            type="submit" value="Register"/>
                            </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;