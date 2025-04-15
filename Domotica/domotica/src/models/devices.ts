
export class Device {    
    name: string = '';
    state: boolean = false;    
    icon: string = 'devices';
    pin: number = 0;
}

export class Environment {
    name: string = '';
    devices: Array<Device> = [];
}

export class ResponseItem<T> {
    fields: T|null;

    constructor(initialValue:T) {
        this.fields = initialValue;
    }
}

export class ApiResponse<T> {
    items: Array<ResponseItem<T>> = [];
}


