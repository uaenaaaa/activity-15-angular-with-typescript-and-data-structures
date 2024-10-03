import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MealPlanList from '@app/interface/meal-plan-list';

@Component({
	selector: 'app-meal-plan-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './meal-plan-list.component.html',
	styles: ``,
})
export class MealPlanListComponent {
	meals: MealPlanList[] = [];

	name: string = '';
	breakfast: string = '';
	lunch: string = '';
	dinner: string = '';
	snack: string = '';
	drink: string = '';

	addMealPlan() {
		this.meals.push({
			name: this.name,
			breakfast: this.breakfast,
			lunch: this.lunch,
			dinner: this.dinner,
			snack: this.snack,
			drink: this.drink,
		});

		this.name = '';
		this.breakfast = '';
		this.lunch = '';
		this.dinner = '';
		this.snack = '';
		this.drink = '';
	}
}
