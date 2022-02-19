import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.sservice';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  arrPagesButtons: any[] = new Array();
  arrCharacters: Character[];

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrCharacters = new Array();
  }

  async ngOnInit(): Promise<void> {
    //para saber el numero total de paginas tengo que hacer una consulta a la api de todos los character calcular el numero de paginas y luego hacer consultas por pagina.

    const allCharacters = await this.characterService.getAll();
    const numpages = Math.ceil(allCharacters.length / 10)
    this.arrPagesButtons = new Array(numpages)



    //la carga de este componente se puede producir desde dos rutas la ruta principal que cargar todo los personajes paginados. Y la ruta de search donde cargan solo las busquedas por nombre

    this.activatedRoute.params.subscribe(async params => {
      console.log('params', params)
      if (params['name']) {
        //tengo que filtrar por nombre
        this.arrCharacters = await this.characterService.getByName(params['name']);
      } else if (params['page']) {
        this.arrCharacters = await this.characterService.getByPage(parseInt(params['page']))
      } else {
        //tengo que filtrar por todos
        this.arrCharacters = await this.characterService.getByPage();
      }
    })

    //para captura queryparams necesito el activatedRoute pero no me suscribo a params sino a queryparams

    this.activatedRoute.queryParams.subscribe(async queryParams => {
      console.log('queryparams', queryParams)
      if (queryParams['category'] && queryParams['category'] !== 'none') {
        //filtrar por categoria
        this.arrCharacters = await this.characterService.getByCategory(queryParams['category']);
      } else if (queryParams['category'] && queryParams['category'] === 'none') {
        this.arrCharacters = await this.characterService.getByPage();
      }

    })
  }

}
