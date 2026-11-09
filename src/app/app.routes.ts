import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { MentionsLegales } from './pages/mentions-legales/mentions-legales';
import { Header } from './components/layouts/header/header';
import { LikeButton } from './components/like-button/like-button';
import { Confidentialite } from './pages/confidentialite/confidentialite';
import { TextInterpolationLesson } from './pages/lessons/text-interpolation-lesson/text-interpolation-lesson';
import { TextInterpolationExercise } from './pages/exercises/text-interpolation-exercise/text-interpolation-exercise';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'mentions-legales', component: MentionsLegales },
    { path: 'confidentialite', component:Confidentialite },
    { path: 'text-interpolation-lesson', component:TextInterpolationLesson },
    { path: 'text-interpolation-exercise', component: TextInterpolationExercise },


];
