import { Injectable } from '@angular/core';
import BuildingList from '@app/interface/building-list';

@Injectable({
	providedIn: 'root',
})
export class BuildingListService {
	private buildings: BuildingList[] = [];

	constructor() {}

	addBuilding(
		name: string,
		floors: number,
		rooms: number,
		occupants: number,
	): void {
		this.buildings.push({
			name: name,
			floors: floors,
			rooms: rooms,
			occupants: occupants,
		});
	}

	getBuildings(): BuildingList[] {
		return this.buildings;
	}
}
