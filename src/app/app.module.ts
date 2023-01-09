import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Modulos
import { SharedModule } from './shared/shared.module';

// Rutas
import { AppRoutingModule } from './app-routing.module';

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
        UsuariosModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
