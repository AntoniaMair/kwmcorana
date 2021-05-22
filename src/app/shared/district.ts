import { Location } from "./location";
export { Location } from "./location";

export class District {

  constructor(
    public id:number, 
    public bezeichnung: String, 
    public state_id: number,
    public locations: Location[]
    ){}
}