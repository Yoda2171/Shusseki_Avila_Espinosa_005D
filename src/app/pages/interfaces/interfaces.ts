export interface RespuestaPokemon{
    count:number;
    next:string;
    previous: null;
    results: Result[];    
}

export interface Result{
    name:string;
    url:string;
}

export interface Root {
    abilities: any[]
    base_experience: number
    forms: any[]
    game_indices: any[]
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: any[]
    name: string
    order: number
    past_types: any[]
    species: Species
    sprites: Sprites
    stats: any[]
    types: Type[]
    weight: number
  }
  
  export interface Species {}
  
  export interface Sprites {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    other: Other
    versions: Versions
  }
  
  export interface Other {}
  
  export interface Versions {}
  
  export interface Type {
    slot: number
    type: Type2
  }
  
  export interface Type2 {
    name: string
    url: string
  }
  