import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import FoodMenuList from '@app/interface/food-menu-list';

@Component({
	selector: 'app-food-menu-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './food-menu-list.component.html',
	styles: ``,
})
export class FoodMenuListComponent {
	foodMenuList: FoodMenuList[] = [];

	id: number = 0;
	name: string = '';
	price: number = 0;
	description: string = '';
	rating: number = 0;

	addFoodMenu() {
		this.foodMenuList.push({
			id: this.id,
			name: this.name,
			price: this.price,
			description: this.description,
			rating: this.rating,
		});
		this.id = 0;
		this.name = '';
		this.price = 0;
		this.description = '';
		this.rating = 0;
	}
}
