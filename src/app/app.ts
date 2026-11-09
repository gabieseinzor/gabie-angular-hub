import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layouts/header/header';
import { Footer } from './components/layouts/footer/footer';
import { LikeButton } from './components/like-button/like-button';

@Component({
  imports: [RouterOutlet, Header, Footer, LikeButton],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hub-angular');
}
