import { Injectable } from '@angular/core';
import Sports from '@app/interface/sports-list';

@Injectable({
	providedIn: 'root',
})
export class SportsListService {
	private sports: Sports[] = [];

	constructor() {}

	addSport(id: number, name: string, team: string): void {
		this.sports.push({
			id: id,
			name: name,
			team: team,
		});
	}

	getSports(): Sports[] {
		return this.sports;
	}
}
