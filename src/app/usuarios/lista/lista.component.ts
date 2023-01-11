import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuarios } from 'src/app/store/actions';
//import { UsuarioService } from 'src/app/services/usuario.service';
import { AppState } from 'src/app/store/app.reducer';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {


    arrayUsuarios: Usuario[] = [];
    loading: boolean = false;
    error: any;


    constructor(
        //private usuarioService: UsuarioService
        private store: Store<AppState>
    ) { }


    ngOnInit(): void {
        // petición con servicios
        /*this.usuarioService.getUsers()
        .subscribe( usuario => {
            this.arrayUsuarios = usuario;
        });*/

        this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
            this.arrayUsuarios = users;
            this.loading = loading;
            this.error = error;
        });

        this.store.dispatch(cargarUsuarios());
    }

}
