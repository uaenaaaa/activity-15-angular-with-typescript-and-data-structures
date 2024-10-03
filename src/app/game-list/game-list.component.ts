import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import GameList from '@app/interface/game-list';

@Component({
	selector: 'app-game-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './game-list.component.html',
	styles: ``,
})
export class GameListComponent {
	games: GameList[] = [];

	id: string = '';
	name: string = '';
	description: string = '';
	platform: string = '';

	addGame(): void {
		this.games.push({
			id: Number(this.id),
			name: this.name,
			description: this.description,
			platform: this.platform,
		});

		this.id = '';
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
