import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentListService } from '@app/services/student-list/student-list.service';
import StudentList from '@app/interface/student-list';

@Component({
	selector: 'app-student-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './student-list.component.html',
})
export class StudentListComponent {
	constructor(private studentListService: StudentListService) {
		this.students = this.studentListService.getStudents();
	}
	students: StudentList[] = [];
	id: string = '';
	name: string = '';
	grade: string = '';
	age: number = 0;

	addStudent(): void {
		this.studentListService.addStudent(
			this.id,
			this.name,
			this.grade,
			this.age,
		);
		this.age = 0;
		this.grade = '';
		this.id = '';
		this.name = '';
	}
}
