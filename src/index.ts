import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
