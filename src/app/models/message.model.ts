import {Deserialization} from "./shared/deserialization.basemodel";
import {autoserialize, deserialize} from "cerialize";
export class Message extends Deserialization {

  @autoserialize name: string;
  @autoserialize text: string;
  @autoserialize photoUrl: string;
  @autoserialize imageUrl: string;


  constructor(name?: string, text?: string, photoUrl?: string, imageUrl?: string) {
    super();
    if (name) this.name = name;
    if (text) this.text = text;
    if (photoUrl) this.photoUrl = photoUrl;
    if (imageUrl) this.imageUrl = imageUrl;
  }
}
