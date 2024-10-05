import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PresentationList from '@app/interface/presentation-list';
import { PresentationListService } from '@app/services/presentation-list/presentation-list.service';

@Component({
	selector: 'app-presentation-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './presentation-list.component.html',
	styles: ``,
})
export class PresentationListComponent {
	presentations = [] as PresentationList[];
	constructor(private presentationService: PresentationListService) {
		this.presentations = this.presentationService.getPresentations();
	}

	topic: string = '';
	presenter: string = '';
	date: string = '';
	time: string = '';

	addPresentation() {
		this.presentationService.addPresentation(
			this.topic,
			this.presenter,
			this.date,
			this.time,
		);

		this.topic = '';
		this.presenter = '';
		this.date = '';
		this.time = '';
	}
}
