
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';


@Injectable({
  providedIn: 'root'
})
export class DataServicio {
private apiUrl = 'http://localhost:8080/api/prueba/mensaje'; // Example API endpoint

  constructor(private http: HttpClient) { }

  getData(): Observable<Mensaje> {
    return this.http.post<any>(this.apiUrl, {
     "asunto":"El gerardito",
     "cuerpo":"El gerardito esta muy bonito"
        }   );
  }
}
