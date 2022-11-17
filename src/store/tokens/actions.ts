export type Action = {type: "ADD_TOKEN" | "ADD_ID" | "ADD_TIPOUSER"; payload: string};

export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});

export const addId = (id: string): Action => ({
    type: "ADD_ID",
    payload: id
})

export const addUser = (tipoUser: string): Action =>({
    type: "ADD_TIPOUSER",
    payload: tipoUser,
});