import { getCdnAxios } from "./services.config";


export const getDevices = ()=>{
    getCdnAxios().get("?content_type=device");
}