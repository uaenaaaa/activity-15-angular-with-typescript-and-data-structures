import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CityList from '@app/interface/city-list';
import { CityListService } from '@app/services/city-list/city-list.service';

@Component({
	selector: 'app-city-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './city-list.component.html',
	styles: ``,
})
export class CityListComponent {
	cities = [] as CityList[];
	constructor(private cityService: CityListService) {
		this.cities = this.cityService.getCities();
	}

	id: string = '';
	name: string = '';
	country: string = '';
	population: number = 0;

	addCity(): void {
		this.cityService.addCity(
			this.id,
			this.name,
			this.country,
			Number(this.population),
		);

		this.id = '';
		this.name = '';
		this.country = '';
		this.population = 0;
	}
}
