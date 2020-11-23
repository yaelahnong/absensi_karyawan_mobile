export interface Attendance {
    jam_masuk: string,
    jam_keluar: string,
    tanggal: string,
    id_user: number
}

export interface AttendanceState {
    data_absen: Attendance[]
}

export const GET_ATTENDANCE = 'GET_ATTENDANCE'

interface getAttendanceAction {
    type: typeof GET_ATTENDANCE
    payload: Attendance
}

export type AttendanceActionTypes = getAttendanceAction