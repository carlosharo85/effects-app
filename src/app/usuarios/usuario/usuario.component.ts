import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuarioActions from 'src/app/store/actions';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

    usuario!: Usuario;
    loading: boolean = false;
    error: any;

    constructor(
        private router: ActivatedRoute,
        private store: Store<AppState>
    ) { }


    ngOnInit(): void {
        this.store.select('usuario').subscribe(({ user, loading, error }) => {
            this.loading = loading;
            this.error = error;
            if (user != null) {
                this.usuario = user;
            }
        });

        this.router.params.subscribe( ({ id }) => {
            this.store.dispatch(usuarioActions.cargarUsuario({ id: id }));
        });
    }

}
