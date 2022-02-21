import React from "react"; 
import logo from '../../assets/img/tesla.jpg'

class Example2 extends React.Component {
    render() {
        return(
            <div>
                <h1>New {this.props.name} model</h1>
                <img src={logo} alt="logo"/>
            </div>
        )
    }
}

export default Example2;