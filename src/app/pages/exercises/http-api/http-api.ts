import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MeteoService } from '../../../services/meteo';
import { MeteoResponse } from '../../../models/meteo.model';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
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
        if (!response.city_info) {
          this.errorMessage.set('Oups… aucune ville trouvée avec ce nom.');
          this.isLoading.set(false);
          return;
        }
        this.meteoData.set(response);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage.set(`Oups… impossible de récupérer la météo pour cette ville.`);
        this.isLoading.set(false);
      },
    });
  }

  ngOnInit(): void {
    this.loadMeteo('toulouse');
  }

  // recherche par ville
  searchModel = signal({ city: 'toulouse' });
  searchForm = form(this.searchModel);

  search(): void {
    const city = this.searchForm.city().value().trim();
    if (city) {
      this.loadMeteo(city);
    } else {
      this.errorMessage.set('Veuillez saisir une ville.');
    }
  }

  quickSearchCities = ['Toulouse', 'Paris', 'Lyon', 'Bordeaux', 'Genève'];
  // fonction pour effectuer la recherche rapide
  selectQuickCity(city: string): void {
    this.searchModel.set({ city });
    this.search();
  }
  forecastDays = computed(() => {
    const meteo = this.meteoData();
    if (!meteo) return [];
    return [
      meteo.fcst_day_0,
      meteo.fcst_day_1,
      meteo.fcst_day_2,
      meteo.fcst_day_3,
      meteo.fcst_day_4,
    ];
  });
}
