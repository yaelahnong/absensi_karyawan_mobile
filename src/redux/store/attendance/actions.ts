import { Attendance, AttendanceActionTypes, GET_ATTENDANCE } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newAttendance: Attendance): AttendanceActionTypes {
    return {
        type: GET_ATTENDANCE,
        payload: newAttendance
    }
}