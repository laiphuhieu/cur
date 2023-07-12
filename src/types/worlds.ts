import { IEntity } from "./common";

export interface Worlds extends IEntity {
    
    name: string,
    sceneAddressable: number,
    instance: number,
    plinthAddressable: number,
    worldWelcomeHeader: string,
    worldWelcomeMessage: string,
    welcomeMessageContent: any[],
    welcomeMessageContentAutoTrigger: false,
    musicAddressable: number
}