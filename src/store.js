const {createStore} = require("redux")

let initialState = {
    products: []
}


export const GET_INVENTORY = "GET_INVENTORY"

function reducer(state=initialState, action){
    const {type,payload} = action
    switch(type){
        case GET_INVENTORY:
        return {
            ...state,
            products: [...payload]
        }
    
        default:
        return state
    }
}

export default createStore(reducer)

