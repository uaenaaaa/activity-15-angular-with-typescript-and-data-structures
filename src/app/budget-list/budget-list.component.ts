import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import BudgetList from '@app/interface/budget-list';

@Component({
	selector: 'app-budget-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './budget-list.component.html',
	styles: ``,
})
export class BudgetListComponent {
	budgets: BudgetList[] = [];

	project: string = '';
	budget: number = 0;
	status: string = '';
	startDate: string = '';
	endDate: string = '';

	addBudget() {
		this.budgets.push({
			project: this.project,
			budget: this.budget,
			status: this.status,
			startDate: this.startDate,
			endDate: this.endDate,
		});

		this.project = '';
		this.budget = 0;
		this.status = '';
		this.startDate = '';
		this.endDate = '';
	}
}
