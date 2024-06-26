import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h2>Location : New Delhi</h2>
                <h2>Contact : +9999999999999</h2>
            </div>
        )
    }

}

export default UserClass;