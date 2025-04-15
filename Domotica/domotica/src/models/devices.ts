
export class Device {
    id: string = "";
    name: string = '';
    state: boolean = false;    
    icon: string = 'devices';
    pin: number = 0;
}

export class Environment {
    id: string = "";
    name: string = '';
    devices: Array<Device> = [];
}

export class ResponseSys {
    id: string = "";
}

export class ResponseItem<T> {
    fields: T|null;
    sys: ResponseSys = new ResponseSys();

    constructor(initialValue:T) {
        this.fields = initialValue;
    }
}

export class ApiResponse<T> {
    items: Array<ResponseItem<T>> = [];    
}