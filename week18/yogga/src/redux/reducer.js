import {FETCH_POSITION,CHANGE_FILTERED} from "./action"


const initState = {
    positions:[],
    filteredPositions:[]
}


export const reducers = (state= initState,action={})=>{

    console.log(action)

    switch (action.type) {
        case FETCH_POSITION:
            return {...state,positions:action.payload,filteredPositions:action.payload}
        case CHANGE_FILTERED:
            let toreturn = action.payload==="all"
            ?state.positions
            :state.positions.filter(position=>{return position.id===parseInt(action.payload)})
            console.log(action.payload)
            console.log(toreturn)

        return {...state,filteredPositions:toreturn}
        default:
        return {...state}
    }

}