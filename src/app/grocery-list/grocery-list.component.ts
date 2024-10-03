import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import GroceryList from '@app/interface/grocery-list';

@Component({
	selector: 'app-grocery-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './grocery-list.component.html',
	styles: ``,
})
export class GroceryListComponent {
	groceryList: GroceryList[] = [];

	id: number = 0;
	name: string = '';
	price: number = 0;
	description: string = '';

	addGrocery() {
		this.groceryList.push({
			id: this.id,
			name: this.name,
			price: this.price,
			description: this.description,
		});
		this.id = 0;
		this.name = '';
		this.price = 0;
		this.description = '';
	}
}
