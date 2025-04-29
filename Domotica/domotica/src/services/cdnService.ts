import { ApiResponse, Device, Environment, EnvironmentResponse } from "@/models/devices";
import { getCdnAxios } from "./services.config";

export const getDevices = (): Promise<ApiResponse<Device,null>> => {
    return getCdnAxios().get("?content_type=device");   
}

export const getEnvironments = (): Promise<ApiResponse<EnvironmentResponse,Device>> => {
    return getCdnAxios().get("?content_type=environment");   
}
