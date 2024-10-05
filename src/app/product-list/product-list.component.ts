import { Component } from '@angular/core';
import Product from '@app/interface/product-list';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListService } from '@app/services/product-list/product-list.service';

@Component({
	selector: 'app-product-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './product-list.component.html',
	styles: ``,
})
export class ProductListComponent {
	products = [] as Product[];
	constructor(private productService: ProductListService) {
		this.products = this.productService.getProducts();
	}
	id: number = 0;
	name: string = '';
	price: number = 0;

	addProduct(): void {
		this.productService.addProduct(Number(this.id), this.name, this.price);
		this.id = 0;
		this.name = '';
		this.price = 0;
	}
}
