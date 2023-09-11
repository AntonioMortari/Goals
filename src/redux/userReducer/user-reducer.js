const initialState = {
    dataUser: JSON.parse(sessionStorage.getItem('user')) || null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'user/newUser':
            sessionStorage.setItem('user', JSON.stringify(action.payload))
            return {
                ...state,
                dataUser: action.payload
            }

        case 'user/logout':
            sessionStorage.removeItem('user')
            return {
                ...state,
                dataUser: null
            }

        case 'user/update':
            sessionStorage.setItem('user', JSON.stringify(action.payload))
            return {
                ...state,
                dataUser: action.payload
            }


        default:
            return state
    }

}

export default userReducer