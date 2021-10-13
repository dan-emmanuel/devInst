import axios from "axios";
export const FETCH_POSITION = "FETCH_POSITION"
export const CHANGE_FILTERED = "CHANGE_FILTERED"



export const fetcher = ()=>async(dispatch)=>{
    try {
        let url = "https://zivuch.github.io/yogaapi.json"
        let resp = await axios.get(url)
        console.log(resp)
        let fetchedData = resp.data
        dispatch(
            {
                type: FETCH_POSITION,
                payload: fetchedData,
            }
        )

    } catch (error) {
        console.log(error)
    }

}

export const chanegFiletred = (id)=>{
    return {
        type: CHANGE_FILTERED,
        payload: id,
    }
}