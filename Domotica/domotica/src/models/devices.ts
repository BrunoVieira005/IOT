export class Device {
    name: string = '';
    state: boolean = false;
    icon: string = '';
    favorite: boolean = false;
}

export class Environment {
    name: string = '';
    devices: Array<Device> = [];
}