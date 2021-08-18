import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdress } from '../models/IAdress';
import { BlAdressService } from './bl-adress.service';

@Injectable({
  providedIn: 'root'
})
export class BlFacadeService {
  constructor(private blAdressService: BlAdressService) { }
  saveAdress(adress: IAdress) {
    this.blAdressService.saveAdress(adress);
  }
  get AdressSaveFailed$(): Observable<string> {
    return this.blAdressService.AdressSaveFailed$;
  }
  get AdressaveSucceeded$(): Observable<IAdress> {
    return this.blAdressService.AdressaveSucceeded$;
  }

}
