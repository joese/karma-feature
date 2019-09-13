import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SubOneModule } from './sub-one-component/sub-one.module';
import { environment } from '../environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SubOneModule)
  .catch(err => console.error(err));
