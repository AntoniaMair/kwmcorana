import { Vacevent } from "./vacevent";
export { Vacevent } from "./vacevent";

export class Location {

  constructor(
  public id: number, 
  public bezeichnung: String, 
  public street: String, 
  public plz: String, 
  public ort: String, 
  public capacity: number, 
  public district_id: number,
  public vacevents?: Vacevent[]
  ){}
}