import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://www.breakingbadapi.com/api/characters/';
  }

  getAll(): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(this.baseUrl));
  }


}
