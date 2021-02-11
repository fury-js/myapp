import React from 'react'
// import 'font-awesome/css/font-awesome.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheck, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// var FontAwesome = require('@fortawesome/react-fontawesome')


export class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isListOpen: false,
            headerTitle: this.props.title
        }
    }
    toggleList = () => {
        this.setState(prevState => ({
            isListOpen: !prevState.isListOpen
        }))
    }
    selectItem = (item) => {
        const { resetThenSet } =this.props;
        const { name, id, } = item;

        this.setState({
            headerTitle: name,
            isListOpen: false,
        }, () => resetThenSet(id,))
    }
    render (){
        const { isListOpen, headerTitle } = this.state
        const {countries} = this.props
        return (
            <div className="ma3 dropdown">
                <div 
                    type="button"
                    className=""
                    onClick={this.toggleList}>
                        <button className=" btn btn-secondary dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">{headerTitle}</button>
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
                                        {item.name}
                                        {' '}
                                        {item.selected }
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
        )
    }
}
export default Dropdown;