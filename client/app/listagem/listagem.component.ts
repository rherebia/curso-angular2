import {Component} from "@angular/core";
import {Http} from '@angular/http';
import {FotoService} from "../foto/foto.service";
import {FotoComponent} from "../foto/foto.component";

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];

    constructor(service: FotoService, http: Http) {

        service.lista().subscribe(fotos => {
            this.fotos = fotos;
            console.log(this.fotos);
        }, erro => console.log(erro));
    }
}