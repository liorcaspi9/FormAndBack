import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { IAdress } from '../models/IAdress';

@Injectable({
  providedIn: 'root'
})
export class DalAdressService {
  constructor() { }
  saveAdress$(adress: IAdress): Observable<IAdress> {
    // call http.post(adress);

    // simulates going to the server here!!!
    let res: Observable<IAdress> = of({
      "company": "earum aut rem",
      "firstName": "Lloyd",
      "lastName": "Harber",
      "address": "iste",
      "address2": "Odit et",
      "city": "Recusandae",
      "state": "Maxime",
      "postalCode": "Eum nobis sint.",
      "shipping": "Libero"
    }).pipe(delay(2000)
      , map((res) => {
        // comment or uncomment lines 30 and 31 to simulate success or failure

        // return res;
        throw new Error('OMG');
      }));


    return res;
  }
}
