export class Device {
    name: string = '';
    state: boolean = false;
    icon: string = '';

}

export class Environment {
    name: string = '';
    devices: Array<Device> = [];
}