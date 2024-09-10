import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
    {
        path: '',
        title: 'Sobre mim',
        component: AboutComponent,
    },
    {
        path: 'html',
        title: 'HTML, CSS, JavaScript',
        component: HtmlComponent,
    },
];
