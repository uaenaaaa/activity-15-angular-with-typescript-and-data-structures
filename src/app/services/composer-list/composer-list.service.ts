import { Injectable } from '@angular/core';
import ComposerList from '@app/interface/composer-list';

@Injectable({
	providedIn: 'root',
})
export class ComposerListService {
	private composers: ComposerList[] = [];

	constructor() {}

	addComposer(
		name: string,
		popularMusic: string,
		genre: string,
		country: string,
	): void {
		this.composers.push({
			name: name,
			popularMusic: popularMusic,
			genre: genre,
			country: country,
		});
	}

	getComposers(): ComposerList[] {
		return this.composers;
	}
}
