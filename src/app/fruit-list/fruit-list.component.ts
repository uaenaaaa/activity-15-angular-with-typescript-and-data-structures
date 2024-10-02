import { Component } from '@angular/core';
import FruitList from '@app/interface/fruit-list';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
	selector: 'app-fruit-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './fruit-list.component.html',
	styles: ``,
})
export class FruitListComponent {
	fruits: FruitList[] = [];

	id: string = '';
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addFruit(): void {
		this.fruits.push({
			id: this.id,
			name: this.name,
			quantity: this.quantity,
			price: this.price,
		});

		this.id = '';
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}
