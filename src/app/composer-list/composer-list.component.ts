import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ComposerList from '@app/interface/composer-list';
import { ComposerListService } from '@app/services/composer-list/composer-list.service';

@Component({
	selector: 'app-composer-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './composer-list.component.html',
	styles: ``,
})
export class ComposerListComponent {
	composers = [] as ComposerList[];
	constructor(private composerService: ComposerListService) {
		this.composers = this.composerService.getComposers();
	}

	name: string = '';
	popularMusic: string = '';
	genre: string = '';
	country: string = '';

	addComposer() {
		this.composerService.addComposer(
			this.name,
			this.popularMusic,
			this.genre,
			this.country,
		);

		this.name = '';
		this.popularMusic = '';
		this.genre = '';
		this.country = '';
	}
}
