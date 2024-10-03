import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import DestinationList from '@app/interface/destination-list';

@Component({
	selector: 'app-destination-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './destination-list.component.html',
	styles: ``,
})
export class DestinationListComponent {
	destinations: DestinationList[] = [];

	id: number = 0;
	name: string = '';
	description: string = '';
	location: string = '';

	addDestination() {
		this.destinations.push({
			id: this.id,
			name: this.name,
			description: this.description,
			location: this.location,
		});

		this.id = 0;
		this.name = '';
		this.description = '';
		this.location = '';
	}
}
