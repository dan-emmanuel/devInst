import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            errorInfo:undefined
        };
    }
  
   
  
    componentDidCatch(error, errorInfo) {
        this.setState(
            {
                error:error,
                errorInfo:errorInfo
            }
        )
      
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>{this.state.error.toString()}</h1>;
      }
      return this.props.children;
    }
}