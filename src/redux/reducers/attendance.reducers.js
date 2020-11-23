const initialState = {
    data_absen: []
}

const attendance = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ATTENDANCE_FULFILLED':
            return {
                ...state,
                data_absen: action.payload.data
            }
        
        default:
            return state;
    }
}

export default attendance;