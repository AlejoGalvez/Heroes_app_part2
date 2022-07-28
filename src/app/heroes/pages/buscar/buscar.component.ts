import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { TitleStrategy } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroesService.getSugerencias( this.termino )
      .subscribe(heroes => {this.heroes = heroes;
      console.log(heroes == [])});
  }

  opcionSeleccionada(event:MatAutocompleteSelectedEvent){
    if (!event.option.value) {
      return
    } else {
    
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroesService.getHeroePorId( heroe.id! )
      .subscribe(heroe => this.heroeSeleccionado = heroe)
    }
  }

}
