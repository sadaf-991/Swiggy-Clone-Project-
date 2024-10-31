import React from "react";

class User extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           count: 0,
        }        
    }

    render(){

        const {count} = this.state;

        return(
        <div className="use">
            <h4>Count: {count}</h4>
            <button onClick={()=> {
                this.setState({
                count: this.state.count + 1,
            });
        }}
            > Increase
            </button>
            
            <h2>Name: {this.props.name}</h2>
            <h3>Contact No.: {this.props.number}</h3>
            <h3>Location : {this.props.location}</h3>
        </div>
        )
    }
}

export default User;