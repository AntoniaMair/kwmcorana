import {Vaccinated} from './vaccinated';
export class VaccinatedFactory {

  static empty(): Vaccinated {
    return new Vaccinated(null, '', '', '', new Date(), '', '', '', 0, 0);
  }

  static fromObject (rawVaccinated: any): Vaccinated{
    return new Vaccinated(
      rawVaccinated.id,
      rawVaccinated.firstname,
      rawVaccinated.lastname,
      rawVaccinated.sex,
      typeof(rawVaccinated.birthdate) === 'string' ?
      new Date(rawVaccinated.birthdate) : rawVaccinated.birthdate,
      rawVaccinated.svnr,
      rawVaccinated.email,
      rawVaccinated.tel,
      rawVaccinated.vaccinated,
      rawVaccinated.vacevent_id
    );
  }
}

