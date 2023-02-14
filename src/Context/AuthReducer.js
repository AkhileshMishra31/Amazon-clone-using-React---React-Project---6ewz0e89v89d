export const authState = {
    user: null
}


export const authreducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.profile
            }
        case 'LOG_OUT':
            return {
                ...state,
                user:null
            }

        default:return{
            ...state
        }
    }
}