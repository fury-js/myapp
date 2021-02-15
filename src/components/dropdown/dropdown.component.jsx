import React from 'react'
// import 'font-awesome/css/font-awesome.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheck, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// var FontAwesome = require('@fortawesome/react-fontawesome')


export class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        const { setUserCountry} = this.props
        this.state = {
            isListOpen: false,
            headerTitle: this.props.title,
            userCountry : '',
        }
    }
    componentDidUpdate () {
        let { userCountry } = this.state.userCountry
        let selectedCountry = document.getElementById('btn-country')
        userCountry = selectedCountry.innerHTML
        // console.log(this.state.userCountry)
        
    }
    toggleList = () => {
        this.setState(prevState => ({
            isListOpen: !prevState.isListOpen
        }))
    }
    selectItem = (item) => {
        const { setUserCountry, userCountry } =this.props;
        const { country_name, id, } = item;
        

        this.setState({
            headerTitle: country_name,
            isListOpen: false,
            userCountry: country_name
        })
    }
    render (){
        const { isListOpen, headerTitle } = this.state
        const {countries, setUserCountry} = this.props
        return (
            <div className="ma3 dropdown">
                <div 
                    type="button"
                    className=""
                    onClick={this.toggleList}>
                        <button className=" btn btn-secondary dropdown-toggle"  
                        data-bs-toggle="dropdown" 
                        aria-expanded="false" id ='btn-country'
                        >{headerTitle}</button>
                        {isListOpen
                        ? <FontAwesomeIcon icon={""} className="angle-up" size="50x"/>
                        :<FontAwesomeIcon icon={""} className="angle-down" size="2x"/>}
                    </div>
                    {isListOpen && (
                        <ul className="form-control " role="list">
                            {countries.map((item) => (
                                <li className=""
                                    type="button"
                                    key={item.id}
                                    onClick={() => this.selectItem(item)}>
                                        {item.country_name}
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
        )
    }
}
export default Dropdown;