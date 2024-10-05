import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import GameList from '@app/interface/game-list';
import { GameListService } from '@app/services/game-list/game-list.service';

@Component({
	selector: 'app-game-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './game-list.component.html',
	styles: ``,
})
export class GameListComponent {
	games = [] as GameList[];
	constructor(private gameService: GameListService) {
		this.games = this.gameService.getGames();
	}

	id: number = 0;
	name: string = '';
	description: string = '';
	platform: string = '';

	addGame(): void {
		this.gameService.addGame(
			this.id,
			this.name,
			this.description,
			this.platform,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
