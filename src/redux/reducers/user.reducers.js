// inisialisasi state
const initialState = {
    // membuat state data_user lalu dimasukkan kedalam array
    data_user: []
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_FULFILLED':    
            return {
                // Membuat baru state lalu dirubah nilainya (immutable state)
                ...state,
                data_user: action.payload.data
            }
    
        default:
            return state;
    }
}

export default user;