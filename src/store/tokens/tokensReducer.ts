import {Action } from './actions';

export interface TokenState {
    tokens: string,
    id: string,
    tipoUser: string
}

const initialState = {
    tokens: "",
    id: "",
    tipoUser: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, id: state.id, tipoUser: state.tipoUser}
        }
        case "ADD_ID": {
            return {id: action.payload, tokens: state.tokens, tipoUser: state.tipoUser}
        }
        case "ADD_TIPOUSER": {
            return {tipoUser: action.payload, tokens: state.tokens, id: state.id}
        }

        default:
            return state
    }
}