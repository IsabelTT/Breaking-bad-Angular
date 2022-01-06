import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  arrCharacter: Character[];
  constructor(
    private characterService: CharacterService,
  ) {
    this.arrCharacter = new Array();
  }

  async ngOnInit(): Promise<void> {
    const allcharacters = await this.characterService.getAll();

  }

}
