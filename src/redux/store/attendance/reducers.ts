import {
    AttendanceState,
    AttendanceActionTypes,
    GET_ATTENDANCE
} from './types'

const initialState: AttendanceState = {
    data_absen: []
}

export function attendanceReducer(
    state = initialState,
    action: AttendanceActionTypes
    ): AttendanceState {
    switch (action.type) {
        case GET_ATTENDANCE:
            return {
                data_absen: [...state.data_absen, action.payload]
            }

        default:
            return state
    }
}