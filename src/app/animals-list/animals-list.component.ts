import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Animals from '@app/interface/animals-list';
import { AnimalListService } from '@app/services/animal-list/animal-list.service';

@Component({
	selector: 'app-animals-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './animals-list.component.html',
	styles: ``,
})
export class AnimalsListComponent {
	animals = [] as Animals[];
	constructor(private animalService: AnimalListService) {
		this.animals = this.animalService.getAnimals();
	}

	id: number = 0;
	name: string = '';
	origin: string = '';

	addAnimal(): void {
		this.animalService.addAnimal(this.id, this.name, this.origin);
		this.id = 0;
		this.name = '';
		this.origin = '';
	}
}
