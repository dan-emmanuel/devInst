const Result = ({fname,sname,result,percentage})=>{

    return (
        <div>
            {
                fname&&sname&&result&&percentage
                ?(
                    <>
                    <p>fname : {fname}</p>
                    <p>sname : {sname}</p>
                    <p>result : {result}</p>
                    <p>percentage : {percentage}%</p>
                    </>
                )
                :""
            }
        </div>
       
    )
}


export default Result