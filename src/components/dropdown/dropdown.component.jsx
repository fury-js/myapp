import React from 'react'
// import FontAwesome from '@fortawesome/react-fontawesome'


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
            <div className="dd-wrapper">
                <button 
                    type="button"
                    className="dd-header"
                    onClick={this.toggleList}>
                        <div className="dd-header-title">{headerTitle}</div>
                        {isListOpen
                        ? <div name="angle-up" size="50x"/>
                        :<div name="angle-down" size="2x"/>}
                    </button>
                    {isListOpen && (
                        <div className="dd-list" role="list">
                            {countries.map((item) => (
                                <button 
                                    type="button"
                                    className="dd-list-item"
                                    key={item.id}
                                    onClick={() => this.selectItem(item)}>
                                </button>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}
export default Dropdown;