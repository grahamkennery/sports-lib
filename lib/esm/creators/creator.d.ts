import { CreatorInterface } from './creator.interface';
import { CreatorJSONInterface } from './creator.json.interface';
import { DeviceInterface } from '../activities/devices/device.interface';
export declare class Creator implements CreatorInterface {
    name: string;
    productId?: string;
    manufacturer?: string;
    swInfo?: string;
    hwInfo?: string;
    serialNumber?: string;
    isRecognized?: boolean;
    devices: DeviceInterface[];
    constructor(name: string, productId?: string, manufacturer?: string, swInfo?: string, hwInfo?: string, serialNumber?: string, isRecognized?: boolean);
    toJSON(): CreatorJSONInterface;
}
