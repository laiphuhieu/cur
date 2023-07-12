import { IEntity } from "./common";

export interface Gallery extends IEntity {
  title: string;
  addressable: string;
  keyImage: string;
  elements: any[];
  callToActionText: string;
  callToActionElement: {
    id: string;
    elementType: string;
    target: string;
    customTitle: string;
    customDescription: string;
    customThumbnailUrl: string;
    forceNewTab: true;
  };
  world: number | string;
  position: number[];
  rotation: number[];
  scale: number[];
}
