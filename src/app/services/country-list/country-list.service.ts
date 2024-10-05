import { Injectable } from '@angular/core';
import Country from '@app/interface/country-list';

@Injectable({
	providedIn: 'root',
})
export class CountryListService {
	private countries: Country[] = [];

	constructor() {}

	addCountry(
		id: number,
		name: string,
		capital: string,
		population: number,
	): void {
		this.countries.push({
			id: id,
			name: name,
			capital: capital,
			population: population,
		});
	}

	getCountries(): Country[] {
		return this.countries;
	}
}
