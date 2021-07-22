import React, { Component } from 'react';
export default class ErrorHandler extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            errorInfo:null
        }
    }

    componentDidCatch(error,errorInfo){
        this.setState(
            {
                error:error,
                errorInfo:errorInfo
            }
        )
    }
    render() {
        if(this.state.errorInfo){
            return (
                <>
                  
                    <h1>{this.state.error.toString()}</h1>
                </>
            )
        }else{
            return this.props.children
        }
       


    }
}
