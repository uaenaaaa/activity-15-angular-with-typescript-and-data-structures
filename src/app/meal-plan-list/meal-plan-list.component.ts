import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealPlanListService } from '@app/services/meal-plan-list/meal-plan-list.service';
import MealPlanList from '@app/interface/meal-plan-list';

@Component({
	selector: 'app-meal-plan-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './meal-plan-list.component.html',
	styles: ``,
})
export class MealPlanListComponent {
	meals = [] as MealPlanList[];
	constructor(private mealPlanService: MealPlanListService) {
		this.meals = this.mealPlanService.getMeals();
	}

	name: string = '';
	breakfast: string = '';
	lunch: string = '';
	dinner: string = '';
	snack: string = '';
	drink: string = '';

	addMealPlan() {
		this.mealPlanService.addMealPlan(
			this.name,
			this.breakfast,
			this.lunch,
			this.dinner,
			this.snack,
			this.drink,
		);

		this.name = '';
		this.breakfast = '';
		this.lunch = '';
		this.dinner = '';
		this.snack = '';
		this.drink = '';
	}
}
