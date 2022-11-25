import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  offset = 0;
  pokemon = [];

  constructor(private pokeService:PokedexService ) {}

  ngOnInit() {
    this.loadPokemon();
    }
    
  loadPokemon(){
    this.pokeService.getPokemon(this.offset).subscribe(res=>{
      console.log('result:',res);
      this.pokemon=res;
    })
  }
  }




