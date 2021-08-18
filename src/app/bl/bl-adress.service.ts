import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IAdress } from '../models/IAdress';
import { DalFacadeService } from './../dal/dal-facade.service';

@Injectable({
  providedIn: 'root'
})
export class BlAdressService {
  private AdressSaveFailed$$ = new Subject<string>();
  private AdressaveSucceeded$$ = new Subject<IAdress>();

  constructor(private dalFacade: DalFacadeService) { }


  get AdressSaveFailed$(): Observable<string> {
    return this.AdressSaveFailed$$.asObservable();
  }
  get AdressaveSucceeded$(): Observable<IAdress> {
    return this.AdressaveSucceeded$$.asObservable();
  }

  saveAdress(adress: IAdress) {
    this.dalFacade.saveAdress$(adress).pipe(
      catchError(err => of(err.message))
    )
      .subscribe((result: IAdress | string) => {
        if (typeof result === 'string') {
          // save failed because we got a string (from line 27);
          this.AdressSaveFailed$$.next(result);
        }
        else {
          this.AdressaveSucceeded$$.next(result);
        }
      });
  }

}
