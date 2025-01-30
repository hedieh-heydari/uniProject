import Axiose from "../../../utils/Axios/axios"

export const loginApi = async (loginData:any) =>{
    return Axiose.post(`${import.meta.env.VITE_BASE_URL}auth/login`,loginData, {
        headers:{
            Authorization: ''
        }
    })
}