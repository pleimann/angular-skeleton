
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { moistureReducer } from './moisture.reducer';
import { MoistureEffects } from './moisture.effects';

// See following references on the use of ngrx and rxjs.
// https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
// https://github.com/angular-university/ngrx-course
@NgModule({
    imports: [
        StoreModule.provideStore({
            moisture: moistureReducer
        }),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(MoistureEffects),
        RouterStoreModule.connectRouter(),
    ],
    exports: [
        StoreModule
    ],
    providers: []
})
export class AppStoreModule {
}
