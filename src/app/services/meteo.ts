import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { MeteoResponse } from '../models/meteo.model';

@Service()
export class MeteoService {
  private readonly http = inject(HttpClient);

  getMeteoByCity(city: string): Observable<MeteoResponse> {
    return this.http.get<MeteoResponse>(`https://prevision-meteo.ch/services/json/${city}`)
  }
}
