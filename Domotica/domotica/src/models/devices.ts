export class Device {
    name: string = '';
    value: boolean = false;

}

export class Environment {
    name: string = '';
    devices: Array<Device> = [];
}

const lampada = new Device();
lampada.name = 'Led Mesa Escritório';

const ventilador = new Device();
lampada.name = 'Ventilador de Teto';

const quarto = new Environment();
quarto.name = 'quarto';

quarto.devices = [lampada, ventilador];