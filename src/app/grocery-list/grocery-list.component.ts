import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import GroceryList from '@app/interface/grocery-list';
import { GroceryListService } from '@app/services/grocery-list/grocery-list.service';

@Component({
	selector: 'app-grocery-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './grocery-list.component.html',
	styles: ``,
})
export class GroceryListComponent {
	groceryList = [] as GroceryList[];
	constructor(private groceryService: GroceryListService) {
		this.groceryList = this.groceryService.getGroceries();
	}

	id: number = 0;
	name: string = '';
	price: number = 0;
	description: string = '';

	addGrocery() {
		this.groceryService.addGrocery(
			this.id,
			this.name,
			this.price,
			this.description,
		);
		this.id = 0;
		this.name = '';
		this.price = 0;
		this.description = '';
	}
}
