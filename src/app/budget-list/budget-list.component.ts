import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import BudgetList from '@app/interface/budget-list';
import { BudgetListService } from '@app/services/budget-list/budget-list.service';

@Component({
	selector: 'app-budget-list',
	standalone: true,
	imports: [FormsModule, NgForOf],
	templateUrl: './budget-list.component.html',
	styles: ``,
})
export class BudgetListComponent {
	budgets = [] as BudgetList[];
	constructor(private budgetListService: BudgetListService) {
		this.budgets = this.budgetListService.getBudgets();
	}
	project: string = '';
	budget: number = 0;
	status: string = '';
	startDate: string = '';
	endDate: string = '';

	addBudget() {
		this.budgetListService.addBudget(
			this.project,
			this.budget,
			this.status,
			this.startDate,
			this.endDate,
		);

		this.project = '';
		this.budget = 0;
		this.status = '';
		this.startDate = '';
		this.endDate = '';
	}
}
