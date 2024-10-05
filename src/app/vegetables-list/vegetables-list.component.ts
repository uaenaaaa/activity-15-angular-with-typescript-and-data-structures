import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Vegetables from '@app/interface/vegetables-list';
import { VegetableListService } from '@app/services/vegetable-list/vegetable-list.service';

@Component({
	selector: 'app-vegetables-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './vegetables-list.component.html',
	styles: ``,
})
export class VegetablesListComponent {
	vegetables = [] as Vegetables[];
	constructor(private vegetableListService: VegetableListService) {
		this.vegetables = this.vegetableListService.getVegetables();
	}

	id: number = 0;
	name: string = '';
	price: number = 0;

	addVegetable(): void {
		this.vegetableListService.addVegetable(this.id, this.name, this.price);

		this.id = 0;
		this.name = '';
		this.price = 0;
	}
}
