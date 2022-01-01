import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})

//Input que viene de character-list.html (informacion de Padre a hijo)
export class CharacterCardComponent implements OnInit {
  @Input('myCharacter') character: Character | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
