import { Vacevent } from "./vacevent";
export { Vacevent } from "./vacevent";

export class Location {

  constructor(
  public id: number, 
  public bezeichnung: string, 
  public street: string, 
  public plz: string, 
  public ort: string, 
  public capacity: number, 
  public district_id: number,
  public vacevents?: Vacevent[]
  ){}
}