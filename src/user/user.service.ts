import { IUser } from 'types';
import {v4 as uuid} from 'uuid';

export class UserService {
  private users: IUser[] = [
    {id: uuid(), name: 'devson', age: 30},
    {id: uuid(), name: 'chris', age: 28},
    {id: uuid(), name: 'iris', age: 30}
  ]

  public getall(): IUser[] {
    return this.users;
  }
}
