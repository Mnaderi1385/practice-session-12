import React from "react";

class Title extends React.Component {
    render(){
        return(
            <h1 className="text-red-500 mt-5 text-3xl text-center font-bold">{this.props.title}</h1>
        );
    };
};

export default Title;