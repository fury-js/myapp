
import React, { Component } from "react";
import Particles from 'react-particles-js';
import { Button } from "./components/button/button.component"
import { Navigation } from "./components/navigation/navigation";
import { Navbar } from "./components/navbar/navbar";
import { Register } from "./components/register/register";
import {SearchBox } from './components/searchbox/searcbox.component'
import {SignIn } from './components/signin/Signin'
import { CardList } from './components/cardlist/cardlistcomponent';
import { HotelCardlist } from './components/hotel-card-list/hotel-card-list.component';
import './App.css';



const particlesOptions = {
  particles: {
    number: {
        value: 400,
        density: {
            enable: true,
            value_area: 1000
        }
    },
    color: {
        value: '#fff'
    },
    opacity: {
        value: 0.5,
        anim: {
            enable: true
        }
    },
    size: {
        value: 7,
        random: true,
        anim: {
            enable: true,
            speed: 3
        }
    },
    line_linked: {
        enable: false
    },
    move: {
        speed: 0.2
    }
 } 
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      route: '',
      
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({users: users}));
  }

  onRouteChange = (route) =>{
    if(route){
      this.setState({route:route})
    }

  }
  render()  {
    return (
      <div  className="App">
         <Particles className='particles .particles-js'
                params={particlesOptions} />
        <Navigation onRouteChange= {this.onRouteChange}/> 
   
        { this.state.route === 'signin'
          ? <div>
              <SignIn onRouteChange={this.onRouteChange}/>
            </div>
          :
          (
            this.state.route === 'register'
            ?
              <div>
                <Button onRouteChange={this.onRouteChange}/>)
              </div>
            :( this.state.route ==='signuptodrive'
              ?
              <Register/>
              :

              (this.state.route === 'signuptoride'
              ?
              <Register/>
              :(
                this.state.route === 'carhire'
                  ?
                  <div>
                    <Navbar onRouteChange={this.onRouteChange}/>
                    <SearchBox/>
                  </div>
                :
                  (
                  this.state.route === 'home'
                  ?<div>
                    <Navbar onRouteChange={this.onRouteChange}/>
                    <CardList users={this.state.users}/>
                  </div>
                  :
                  <SignIn onRouteChange={this.onRouteChange}/>
                  )
                )
              )
            )
          )
        }   
      </div>
    )
  }
  
}  

export default App;
