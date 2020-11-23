import Axios from 'axios'
import { Post, PostActionTypes, GET_POST } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newPost: Post, id_user: any): PostActionTypes {
    return {
        type: GET_POST,
        payload: newPost
    }
}