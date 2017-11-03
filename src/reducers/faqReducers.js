import {GET_FAQ} from '../actions/constants'

export default function reducer(state = {
    faq: []
},action) {

    switch (action.type) {
        case GET_FAQ:
            return Object.assign({}, state, {faq: action.payload})
        default:
        return state
            
    }
}