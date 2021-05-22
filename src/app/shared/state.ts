import { District } from './district';
export { District } from './district';

export class State {
  constructor(
    public id: number,
    public bezeichnung: String,
    public districts: District[]
  ) {}
}
