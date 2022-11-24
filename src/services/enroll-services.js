import {postEnroll} from "../axios/enroll-rest";
import Cookies from "js-cookie";
import {getDate} from "../redux/actions/enroll-action";

export const getDateServices = async (data) =>{
    console.log('enroll >> ', data)
    try {
        const res = await postEnroll(data)
        console.log(res)
    }catch (e){
        alert('dvdcscdv')
    }
}