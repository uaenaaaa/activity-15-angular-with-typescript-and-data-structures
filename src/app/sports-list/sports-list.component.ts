import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Sports from '@app/interface/sports-list';
import { SportsListService } from '@app/services/sports-list/sports-list.service';

@Component({
	selector: 'app-sports-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './sports-list.component.html',
	styles: ``,
})
export class SportsListComponent {
	sports = [] as Sports[];
	constructor(private sportsService: SportsListService) {
		this.sports = this.sportsService.getSports();
	}
	id: number = 0;
	name: string = '';
	team: string = '';

	addSport(): void {
		this.sportsService.addSport(this.id, this.name, this.team);

		this.id = 0;
		this.name = '';
		this.team = '';
	}
}
