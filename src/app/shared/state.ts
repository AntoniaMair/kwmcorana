import { District } from './district';
export { District } from './district';

export class State {
  constructor(
    public id: number,
    public bezeichnung: string,
    public districts: District[]
  ) {}
}
