import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import FurnitureList from '@app/interface/furniture-list';

@Component({
	selector: 'app-furniture-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './furniture-list.component.html',
	styles: ``,
})
export class FurnitureListComponent {
	furnitureList: FurnitureList[] = [];

	name: string = '';
	description: string = '';
	type: string = '';
	price: number = 0;
	category: string = '';

	addFurniture() {
		this.furnitureList.push({
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
