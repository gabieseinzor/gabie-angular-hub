import { Component, inject, OnInit, signal } from '@angular/core';
import { MeteoService } from '../../../services/meteo';
import { MeteoResponse } from '../../../models/meteo.model';

@Component({
  imports: [],
  selector: 'app-http-api',
  styleUrl: './http-api.css',
  templateUrl: './http-api.html',
})
export class HttpApi implements OnInit {
  private readonly meteoService = inject(MeteoService);
  meteoData = signal<MeteoResponse | null>(null);

  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  loadMeteo(city: string): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.meteoService.getMeteoByCity(city).subscribe({
      next: (response) => {
        console.log(response);
        this.meteoData.set(response);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage.set(`Oups… impossible de récupérer la météo pour cette ville.`);
        this.isLoading.set(false);
      },
    });
  }
  ngOnInit(): void {
    this.loadMeteo('toulouse');
  }
}
