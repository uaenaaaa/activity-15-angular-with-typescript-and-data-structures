import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Country from '@app/interface/country-list';

@Component({
	selector: 'app-country-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './country-list.component.html',
	styles: ``,
})
export class CountryListComponent {
	countries: Country[] = [];

	id: string = '';
	name: string = '';
	capital: string = '';
	population: string = '';

	addCountry(): void {
		this.countries.push({
			id: Number(this.id),
			name: this.name,
			capital: this.capital,
			population: Number(this.population),
		});

		this.id = '';
		this.name = '';
		this.capital = '';
		this.population = '';
	}
}
