import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import TvShowList from '@app/interface/tv-show-list';

@Component({
	selector: 'app-tv-show-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './tv-show-list.component.html',
	styles: ``,
})
export class TvShowListComponent {
	tvShowList: TvShowList[] = [];
	name: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

	addTvShow() {
		this.tvShowList.push({
			name: this.name,
			description: this.description,
			url: this.url,
			rating: this.rating,
			category: this.category,
		});
		this.name = '';
		this.description = '';
		this.url = '';
		this.rating = 0;
		this.category = '';
	}
}
