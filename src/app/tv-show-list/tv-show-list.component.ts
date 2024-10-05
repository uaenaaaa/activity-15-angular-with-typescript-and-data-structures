import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import TvShowList from '@app/interface/tv-show-list';
import { TvShowListService } from '@app/services/tx-show-list/tv-show-list.service';

@Component({
	selector: 'app-tv-show-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './tv-show-list.component.html',
	styles: ``,
})
export class TvShowListComponent {
	tvShowList = [] as TvShowList[];
	constructor(private tvShowService: TvShowListService) {
		this.tvShowList = this.tvShowService.getTvShows();
	}
	name: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

	addTvShow() {
		this.tvShowService.addTvShow(
			this.name,
			this.description,
			this.url,
			this.rating,
			this.category,
		);
		this.name = '';
		this.description = '';
		this.url = '';
		this.rating = 0;
		this.category = '';
	}
}
