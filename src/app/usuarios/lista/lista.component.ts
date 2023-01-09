import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {


    arrayUsuarios: Usuario[] = [];

    constructor(
        private usuarioService: UsuarioService
    ) { }

    ngOnInit(): void {
        this.usuarioService.getUsers()
        .subscribe( usuario => {
            this.arrayUsuarios = usuario;
        });
    }

}
