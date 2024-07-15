// version template del reducer
// const reducer = (state, action) => {

// }



// 1er forma de reducer
const reducerIf = (state, action) => {
    if (action.type === 'ERROR') {
        return {
            ...state,
            loading: false,
            error: true,
        }
    } else if (action.type === 'CHECK') {
        return {
            ...state,
            loading: true,
        }
    } else {
        return {
            ...state,
        }
    }
}

// forma mas popular del reducer
const reducerSwitch = (state, action) => {
    switch(action.type) {
        case 'Error':
            return {
                ...state,
                loading: false,
                error: true,
            }
        case 'CHECK':
            return {
                ...state,
                loading: true,
            }
        default:
            return {
                ...state,
            }
    }   
}