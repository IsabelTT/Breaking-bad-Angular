import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.sservice';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private CharactersService: CharacterService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      let id = parseInt(params['idcharacter']);
      let response: Character[] = await this.CharactersService.getById(id);
      this.character = response[0];
      //console.log(this.character);
    })
  }


}
