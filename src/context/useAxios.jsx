import axios from "axios";

const AxiosA = axios.create({
    // baseURL: 'http://localhost:4000',
    baseURL: 'https://youtube-clone-server-livid.vercel.app',
    withCredentials: true
})
const useAxios = () => {

    return AxiosA;
};

export default useAxios;