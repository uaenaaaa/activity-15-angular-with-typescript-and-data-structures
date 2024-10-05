import { Injectable } from '@angular/core';
import { EmployeeList } from '@app/interface/employee-list';

@Injectable({
	providedIn: 'root',
})
export class EmployeeListService {
	private employees: EmployeeList[] = [];

	constructor() {}

	addEmployee(id: string, name: string, position: string, age: number): void {
		this.employees.push({
			id: id,
			name: name,
			position: position,
			age: age,
		});
	}

	getEmployees(): EmployeeList[] {
		return this.employees;
	}
}
