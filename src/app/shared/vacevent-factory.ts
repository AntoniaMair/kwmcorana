import { Vacevent } from './vacevent';
export class VaceventFactory {
  
  static empty (): Vacevent{
    return new Vacevent(null, 0, new Date(), 0, []);

  }
  static fromObject(rawVacevent: any): Vacevent{
    return new Vacevent(
      rawVacevent.id,
      rawVacevent.location_id,
      typeof(rawVacevent.vacdate) === 'string' ?
      new Date(rawVacevent.vacdate) : rawVacevent.vacdate,
      rawVacevent.maxPers,
      rawVacevent.vaccinateds
    );
  }

}
