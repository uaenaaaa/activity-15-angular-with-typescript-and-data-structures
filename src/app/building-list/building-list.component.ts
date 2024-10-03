import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import BuildingList from '@app/interface/building-list';

@Component({
	selector: 'app-building-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './building-list.component.html',
	styles: ``,
})
export class BuildingListComponent {
	buildingList: BuildingList[] = [];

	name: string = '';
	address: string = '';
	floors: number = 0;
	rooms: number = 0;
	occupants: number = 0;

	addBuilding() {
		this.buildingList.push({
			name: this.name,
			address: this.address,
			floors: this.floors,
			rooms: this.rooms,
			occupants: this.occupants,
		});

		this.name = '';
		this.address = '';
		this.floors = 0;
		this.rooms = 0;
		this.occupants = 0;
	}
}
