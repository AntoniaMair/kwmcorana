import { Location } from "./location";
export { Location } from "./location";

export class District {

  constructor(
    public id:number, 
    public bezeichnung: string, 
    public state_id: number,
    public locations: Location[]
    ){}
}