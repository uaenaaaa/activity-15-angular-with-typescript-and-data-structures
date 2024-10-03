import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import AccessoryList from '@app/interface/accessory-list';

@Component({
	selector: 'app-accessory-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './accessory-list.component.html',
	styles: ``,
})
export class AccessoryListComponent {
	accessoryList: AccessoryList[] = [];

	name: string = '';
	description: string = '';
	type: string = '';
	price: number = 0;
	category: string = '';

	addAccessory() {
		this.accessoryList.push({
			name: this.name,
			description: this.description,
			type: this.type,
			price: this.price,
			category: this.category,
		});

		this.name = '';
		this.description = '';
		this.type = '';
		this.price = 0;
		this.category = '';
	}
}
