import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ExerciseList from '@app/interface/exercise-list';
import { ExerciseListService } from '@app/services/exercise-list/exercise-list.service';

@Component({
	selector: 'app-exercise-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './exercise-list.component.html',
	styles: ``,
})
export class ExerciseListComponent {
	exercises = [] as ExerciseList[];
	constructor(private exerciseService: ExerciseListService) {
		this.exercises = this.exerciseService.getExercises();
	}
	name: string = '';
	sets: number = 0;
	reps: number = 0;
	weight: number = 0;

	addExercise() {
		this.exerciseService.addExercise(
			this.name,
			this.sets,
			this.reps,
			this.weight,
		);

		this.name = '';
		this.sets = 0;
		this.reps = 0;
		this.weight = 0;
	}
}
