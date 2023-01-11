import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducer';
import { EffectsArray } from './store/effects';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Modulos
import { SharedModule } from './shared/shared.module';

// Componentes
import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        UsuariosModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot(EffectsArray),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(), // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
          })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
