// import {
//     PostState,
//     PostActionTypes,
//     GET_POST
// } from './types'

// const initialState: PostState = {
//     data_post: []
// }

// export function postReducer(
//     state = initialState,
//     action: PostActionTypes
//     ): PostState {
//     switch (action.type) {
//         case GET_POST:
//             return {
//                 data_post: [...state.data_post, action.payload]
//             }

//         default:
//             return state
//     }
// }