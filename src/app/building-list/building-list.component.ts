import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import BuildingList from '@app/interface/building-list';
import { BuildingListService } from '@app/services/bulding-list/building-list.service';

@Component({
	selector: 'app-building-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './building-list.component.html',
	styles: ``,
})
export class BuildingListComponent {
	buildingList = [] as BuildingList[];
	constructor(private buildingService: BuildingListService) {
		this.buildingList = this.buildingService.getBuildings();
	}

	name: string = '';
	floors: number = 0;
	rooms: number = 0;
	occupants: number = 0;

	addBuilding() {
		this.buildingService.addBuilding(
			this.name,
			this.floors,
			this.rooms,
			this.occupants,
		);

		this.name = '';
		this.floors = 0;
		this.rooms = 0;
		this.occupants = 0;
	}
}
