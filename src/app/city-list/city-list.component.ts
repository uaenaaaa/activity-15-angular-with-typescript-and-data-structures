import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CityList from '@app/interface/city-list';

@Component({
	selector: 'app-city-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './city-list.component.html',
	styles: ``,
})
export class CityListComponent {
	cities: CityList[] = [];

	id: string = '';
	name: string = '';
	country: string = '';
	population: number = 0;

	addCity(): void {
		this.cities.push({
			id: this.id,
			name: this.name,
			country: this.country,
			population: this.population,
		});

		this.id = '';
		this.name = '';
		this.country = '';
		this.population = 0;
	}
}
