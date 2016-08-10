import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs';

import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';

import client from './client';

bootstrap(AppComponent);
