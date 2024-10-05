import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Country from '@app/interface/country-list';
import { CountryListService } from '@app/services/country-list/country-list.service';

@Component({
	selector: 'app-country-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './country-list.component.html',
	styles: ``,
})
export class CountryListComponent {
	countries = [] as Country[];
	constructor(private countryListService: CountryListService) {
		this.countries = this.countryListService.getCountries();
	}

	id: number = 0;
	name: string = '';
	capital: string = '';
	population: number = 0;

	addCountry(): void {
		this.countryListService.addCountry(
			this.id,
			this.name,
			this.capital,
			this.population,
		);

		this.id = 0;
		this.name = '';
		this.capital = '';
		this.population = 0;
	}
}
