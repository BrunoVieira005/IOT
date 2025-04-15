import { ApiResponse, Device, Environment } from "@/models/devices";
import { getCdnAxios } from "./services.config";

export const getDevices = (): Promise<ApiResponse<Device>> => {
    return getCdnAxios().get("?content_type=device");   
}

export const getEnvironments = (): Promise<ApiResponse<Environment>> => {
    return getCdnAxios().get("?content_type=environment");   
}
