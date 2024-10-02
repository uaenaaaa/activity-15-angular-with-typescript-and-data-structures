import { Component } from '@angular/core';
import Product from '@app/interface/product-list';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-product-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './product-list.component.html',
	styles: ``,
})
export class ProductListComponent {
	products: Product[] = [];
	id: string = '';
	name: string = '';
	price: number = 0;

	addProduct(): void {
		this.products.push({
			id: Number(this.id),
			name: this.name,
			price: this.price,
		});

		this.id = '';
		this.name = '';
		this.price = 0;
	}
}
