import { Component } from "react";

export default class Form extends Component {

    constructor(props) {
        super()
        this.state = {
        }
        this.inputs = props.inputs
    }
    createInput = (elem,i)=>{
        let label = elem.labelText
        ?<label >{elem.labelText}</label>
        :<></>

        return (
            <div key = {i}>  
                {label}
                <input type={elem.type} value={elem.value} name={elem.name}/>
            </div>
        )
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        let form = e.target
        let datas = new FormData(form);
        const value = Object.fromEntries(datas.entries())
        this.setState(value)
    }

    render() {
        return (
            <>
                {
                    this.state.Title
                    ?<div>Data Sent!</div>
                    :<></>
                }
                <div>
                  
                </div>
                
                <form onSubmit={this.handleSubmit}>
                    {
                        this.inputs.map((e,i)=>this.createInput(e,i))
                    }
                </form>
            </>
        )
    }
}