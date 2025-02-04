import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
})
export class DBZComponent {
  constructor(private dbzService: DbzService) {
  }

  get characters(): Character[] {
    return this.dbzService.character;
  }

  onDeleteCharacter( id: string ): void{
    this.dbzService.onDeleteCharacterById(id);
  }

  createCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
