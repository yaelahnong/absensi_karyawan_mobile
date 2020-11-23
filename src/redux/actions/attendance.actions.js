import Axios from "axios";

export const getAttendance = (id_user) => ({
    type: 'GET_ATTENDANCE',
    payload: Axios.get(`http://192.168.1.12/absensi_karyawan_api/public/get_attendance/${id_user}`)
});

// interface getAttendance {
//     type: 'GET_ATTENDANCE',
//     payload: Axios.get(`http://192.168.1.12/absensi_karyawan_api/public/get_attendance/${id_user}`) 
// }