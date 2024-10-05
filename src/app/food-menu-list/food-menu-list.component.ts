import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import FoodMenuList from '@app/interface/food-menu-list';
import { FoodMenuListService } from '@app/services/food-menu-list/food-menu-list.service';

@Component({
	selector: 'app-food-menu-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './food-menu-list.component.html',
	styles: ``,
})
export class FoodMenuListComponent {
	foodMenuList = [] as FoodMenuList[];
	constructor(private foodMenuService: FoodMenuListService) {
		this.foodMenuList = this.foodMenuService.getFoodMenus();
	}

	id: number = 0;
	name: string = '';
	price: number = 0;
	description: string = '';
	rating: number = 0;

	addFoodMenu() {
		this.foodMenuService.addFoodMenu(
			this.id,
			this.name,
			this.price,
			this.description,
			this.rating,
		);
		this.id = 0;
		this.name = '';
		this.price = 0;
		this.description = '';
		this.rating = 0;
	}
}
