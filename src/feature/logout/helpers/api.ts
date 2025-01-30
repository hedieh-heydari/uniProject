import Axiose from "../../../utils/Axios/axios"

export const logoutApi = async () =>{
    return Axiose.post(`${import.meta.env.VITE_BASE_URL}auth/logout`, {})
}