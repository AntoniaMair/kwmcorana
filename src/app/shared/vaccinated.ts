export class Vaccinated {

  constructor(
  public id:number,
  public firstname: string, 
  public lastname:string, 
  public sex:string, 
  public birthdate:Date,
  public svnr:string,
  public email:string,
  public tel:string,
  public vaccinated:number,
  public user_id?:string,
  public vacevent_id?:number){}
}
