import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Animals from '@app/interface/animals-list';

@Component({
	selector: 'app-animals-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './animals-list.component.html',
	styles: ``,
})
export class AnimalsListComponent {
	animals: Animals[] = [];

	id: string = '';
	name: string = '';
	origin: string = '';

	addAnimal(): void {
		this.animals.push({
			id: Number(this.id),
			name: this.name,
			origin: this.origin,
		});

		this.id = '';
		this.name = '';
		this.origin = '';
	}
}
