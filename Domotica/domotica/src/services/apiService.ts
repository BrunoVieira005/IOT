import { ApiResponse, Device, Environment, EnvironmentResponse, NewEnvironment, NewField } from "@/models/devices";
import { getApiAxios } from "./services.config";

export const saveEnvironment = (name:string): Promise<void> => {

    const env = new NewEnvironment();
    env.name.pt = name;
    const field = new NewField<NewEnvironment>(env);

    return getApiAxios().post("/",field,{
        headers: {
            "X-Contentful-Content-Type": "environment"
        }
    });   
}
