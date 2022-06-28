import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShipperModel } from '../models/shipper-model';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient)  { }

  CrearShipper(request: ShipperModel) : Observable<any>

  {
    let endpoint='api/Shippers'
    return this.http.post<Response>(environment.shipper+endpoint,request,httpOptions)


  }
  
}
