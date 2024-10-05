import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import AccessoryList from '@app/interface/accessory-list';
import { AccessoryListService } from '@app/services/accessory-list/accessory-list.service';

@Component({
	selector: 'app-accessory-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './accessory-list.component.html',
	styles: ``,
})
export class AccessoryListComponent {
	accessoryList = [] as AccessoryList[];
	constructor(private accessoryService: AccessoryListService) {
		this.accessoryList = this.accessoryService.getAccessories();
	}

	name: string = '';
	description: string = '';
	price: number = 0;

	addAccessory() {
		this.accessoryService.addAccessory(
			this.name,
			this.description,
			this.price,
		);

		this.name = '';
		this.description = '';
		this.price = 0;
	}
}
