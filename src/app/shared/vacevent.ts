import { Vaccinated } from "./vaccinated";
export { Vaccinated } from "./vaccinated";


export class Vacevent {

  constructor(
    public id:number, 
    public location_id:number, 
    public vacdate:Date, 
    public maxPers:number,
    public vaccinateds?: Vaccinated[]){}
}