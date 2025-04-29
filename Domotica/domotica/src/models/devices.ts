
export class Device {
    id: string = '';
    name: string = '';
    state: boolean = false;    
    icon: string = 'devices';
    pin: number = 0;
}

export class Environment {
    id: string = '';
    name: string = '';
    devices: Array<Device> = [];
}

export class EnvironmentResponse {
    id: string = '';
    name: string = '';
    devices: Array<Omit<ResponseItem<null>,"fields">> = [];
}

export class ResponseSys {
    id: string = '';
}

export class ResponseItem<T> {
    fields: T|null;
    sys: ResponseSys = new ResponseSys();

    constructor(initialValue:T) {
        this.fields = initialValue;
    }
}

export class IncludesResponse<T> {
    Entry: Array<ResponseItem<T>> = [];
}

export class ApiResponse<T,Y> {
    items: Array<ResponseItem<T>> = [];  
    sys: ResponseSys = new ResponseSys();
    includes: IncludesResponse<Y> = new IncludesResponse();      
}


export const mapApiResponseToEnvironments = 
    (apiResponse: ApiResponse<EnvironmentResponse,Device>): Array<Environment> =>{

    return apiResponse.items.map(item=>{
        if(item.fields){
            const environment = new Environment();
            environment.name = item.fields.name;
            environment.id = item.sys.id;
            environment.devices = item.fields.devices?.map(sysDevice=>{
                const device = apiResponse.includes.Entry
                    .find(dev=>dev.sys.id === sysDevice.sys.id);
                if(device?.fields){
                    device.fields.id = sysDevice.sys.id;
                    return device.fields;
                }
                return null;
            }).filter(device=>device!==null);
            return environment;
        }
        return null;
    }).filter(environment=>environment!==null);
}


export class ApiAttribute<T>{
    pt: T|null = null;
    constructor(initialValue: T){
        this.pt = initialValue;
    }
}

export class NewEnvironment {
    name: ApiAttribute<string> = new ApiAttribute("");
}

export class NewField<T>{
    fields: T|null = null;    
    constructor(initialValue: T){
        this.fields = initialValue;
    }
}
