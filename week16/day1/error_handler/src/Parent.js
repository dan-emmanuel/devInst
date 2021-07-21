const Parent = (props)=>{
    console.log(props)

    return (
        <div>
            <h1>Parent</h1>
            {
               props.children
            }
        </div>

    )
}

export default Parent