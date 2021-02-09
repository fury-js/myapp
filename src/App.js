
import React, { Component } from "react";
import { Navigation } from "./components/navigation/navigation";
import { Navbar } from "./components/navbar/navbar";
import { Register } from "./components/register/register";
import {SearchBox } from './components/searchbox/searcbox.component'
import {SignIn } from './components/signin/Signin'
import { CardList } from './components/cardlist/cardlistcomponent';
import { HotelCardlist } from './components/hotel-card-list/hotel-card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      route: 'home',
      
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
        <Navigation/>
        <Navbar onRouteChange = {this.onRouteChange}/>
        { this.state.route === 'Search'
        ? <div>
            <div>
              <SearchBox />
              <Register />
            </div><p></p>
              <CardList users = {this.state.users}/>
           </div>
          :(
            this.state.route === 'findhotels'
            ?
            <div>
              {/* <CardList users = {this.state.users}/> */}
              <HotelCardlist/>
            </div>
            :
            <SignIn/>
          )}

        
        {/* <CardList users = {this.state.users}/> */}

      </div>
    )
  }
  
}  

export default App;
