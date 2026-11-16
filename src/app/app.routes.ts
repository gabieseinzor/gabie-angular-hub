import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { MentionsLegales } from './pages/mentions-legales/mentions-legales';
import { Header } from './components/layouts/header/header';
import { LikeButton } from './components/like-button/like-button';
import { Confidentialite } from './pages/confidentialite/confidentialite';
import { TextInterpolationLesson } from './pages/lessons/text-interpolation-lesson/text-interpolation-lesson';
import { TextInterpolationExercise } from './pages/exercises/text-interpolation-exercise/text-interpolation-exercise';
import { EventBindingLesson } from './pages/lessons/event-binding-lesson/event-binding-lesson';
import { AttributesBindingLesson } from './pages/lessons/attributes-binding-lesson/attributes-binding-lesson';
import { ConditionalRenderingLesson } from './pages/lessons/conditional-rendering-lesson/conditional-rendering-lesson';
import { TwoWayBindingLesson } from './pages/lessons/two-way-binding-lesson/two-way-binding-lesson';
import { ObservableSimpleExercise } from './pages/exercises/observable-simple-exercise/observable-simple-exercise';
import { CounterExercise } from './pages/exercises/counter-exercise/counter-exercise';
import { TodoExercise } from './pages/exercises/todo-exercise/todo-exercise';
import { ApiHttpclientExercice } from './pages/exercises/api-httpclient-exercice/api-httpclient-exercice';

import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'mentions-legales', component: MentionsLegales },
    { path: 'confidentialite', component:Confidentialite },
    { path: 'text-interpolation-lesson', component:TextInterpolationLesson },
    { path: 'text-interpolation-exercise', component: TextInterpolationExercise },
    { path: 'event-binding-lesson', component: EventBindingLesson },
    { path: 'attributes-binding-lesson', component: AttributesBindingLesson },
    { path: 'conditional-rendering-lesson', component: ConditionalRenderingLesson },
    { path: 'two-way-binding-lesson', component: TwoWayBindingLesson },
    { path: 'observable-simple-exercise', component: ObservableSimpleExercise },
    { path: 'counter-exercise', component: CounterExercise },
    { path: 'todo-exercise', component: TodoExercise },
    { path: 'api-httpclient-exercice', component: ApiHttpclientExercice },
    
    { path: '**', component: NotFound },


];
