import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Digimon, DigimonResponse } from '../../../models/digimon.model';

@Component({
  imports: [],
  selector: 'app-api-httpclient-exercice',
  styleUrl: './api-httpclient-exercice.css',
  templateUrl: './api-httpclient-exercice.html',
})
export class ApiHttpclientExercice implements OnInit {
  private http = inject(HttpClient);

  digimons = signal<Digimon[]>([]);
  isLoading = signal<boolean>(true);
  errorMessage = signal<string | null>(null);
  lastRequestLog = signal<string>('En attente d’une requête HTTP...');

  currentPage = signal<number>(0);
  totalPages = signal<number>(0);

  ngOnInit(): void {
    this.loadPage(this.currentPage());
  }
  loadPage(page: number): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.lastRequestLog.set('Requête envoyée…');
    this.http.get<DigimonResponse>(`https://digi-api.com/api/v1/digimon?page=${page}`).subscribe({
      next: (response) => {
        console.log(response);
        this.digimons.set(response.content);

        this.currentPage.set(response.pageable.currentPage);
        this.totalPages.set(response.pageable.totalPages);

        this.isLoading.set(false);
        this.lastRequestLog.set(`${response.content.length} digimons reçus`);
      },
      error: (err) => {
        this.errorMessage.set(`erreur : ${err} `);
        this.isLoading.set(false);
        this.lastRequestLog.set(`echec dans le chargement des digimons`);
      },
    });
  }
}
