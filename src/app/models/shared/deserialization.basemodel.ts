import {UnderscoreCase, DeserializeInto, Serialize, DeserializeKeysFrom, SerializeKeysTo} from "cerialize/dist/serialize";

DeserializeKeysFrom(UnderscoreCase);
SerializeKeysTo(UnderscoreCase);

export class Deserialization {

    constructor() {
    }

    deserialize(json:any) {
        return  DeserializeInto(json, this.constructor, this);
    }

    deserializeGeneric(json:any, clazz:any) {
        //Each Generic should implement this
    }

    serialize(){
        return Serialize(this);
    }
}