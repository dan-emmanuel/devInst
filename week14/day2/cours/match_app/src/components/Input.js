
const Input = ({labelValue,changeHandler,name})=>{

    return (
        <div>
            <label>{labelValue}</label>
            <input name ={name} onChange={changeHandler}></input>
            <span></span>
        </div>
       
    )
}


export default Input