import { Injectable } from '@angular/core';
import { IAdress } from '../models/IAdress';
import { Observable } from 'rxjs';
import { DalAdressService } from './dal-adress.service';

@Injectable({
  providedIn: 'root'
})
export class DalFacadeService {
  constructor(private dalAdressService: DalAdressService) { }

  saveAdress$(adress: IAdress): Observable<IAdress> {
    return this.dalAdressService.saveAdress$(adress);
  }
}
