import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PresentationList from '@app/interface/presentation-list';

@Component({
	selector: 'app-presentation-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './presentation-list.component.html',
	styles: ``,
})
export class PresentationListComponent {
	presentations: PresentationList[] = [];

	topic: string = '';
	presenter: string = '';
	date: string = '';
	time: string = '';

	addPresentation() {
		this.presentations.push({
			topic: this.topic,
			presenter: this.presenter,
			date: this.date,
			time: this.time,
		});

		this.topic = '';
		this.presenter = '';
		this.date = '';
		this.time = '';
	}
}
