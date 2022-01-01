import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  arrCharacter: Character[];
  constructor() {
    this.arrCharacter = new Array();
  }

  ngOnInit(): void {
  }

}
