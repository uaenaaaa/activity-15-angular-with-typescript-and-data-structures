import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Sports from '@app/interface/sports-list';

@Component({
	selector: 'app-sports-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './sports-list.component.html',
	styles: ``,
})
export class SportsListComponent {
	sports: Sports[] = [];

	id: string = '';
	name: string = '';
	team: string = '';

	addSport(): void {
		this.sports.push({
			id: Number(this.id),
			name: this.name,
			team: this.team,
		});

		this.id = '';
		this.name = '';
		this.team = '';
	}
}
