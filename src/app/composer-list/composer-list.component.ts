import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ComposerList from '@app/interface/composer-list';
@Component({
	selector: 'app-composer-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './composer-list.component.html',
	styles: ``,
})
export class ComposerListComponent {
	composers: ComposerList[] = [];

	name: string = '';
	popularMusic: string = '';
	genre: string = '';
	country: string = '';

	addComposer() {
		this.composers.push({
			name: this.name,
			popularMusic: this.popularMusic,
			genre: this.genre,
			country: this.country,
		});

		this.name = '';
		this.popularMusic = '';
		this.genre = '';
		this.country = '';
	}
}
