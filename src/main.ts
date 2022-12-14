import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {logSomething} from "my-lib/secondary";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

logSomething()
