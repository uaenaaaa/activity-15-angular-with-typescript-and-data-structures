import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import DestinationList from '@app/interface/destination-list';
import { DestinationListService } from '@app/services/desination-list/destination-list.service';

@Component({
	selector: 'app-destination-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './destination-list.component.html',
	styles: ``,
})
export class DestinationListComponent {
	destinations = [] as DestinationList[];
	constructor(private destinationListService: DestinationListService) {
		this.destinations = this.destinationListService.getDestinations();
	}

	id: number = 0;
	name: string = '';
	description: string = '';
	location: string = '';

	addDestination() {
		this.destinationListService.addDestination(
			this.id,
			this.name,
			this.description,
			this.location,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.location = '';
	}
}
