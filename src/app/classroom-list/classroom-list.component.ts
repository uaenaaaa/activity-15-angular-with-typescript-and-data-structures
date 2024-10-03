import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ClassroomList from '@app/interface/classroom-list';

@Component({
	selector: 'app-classroom-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './classroom-list.component.html',
	styles: ``,
})
export class ClassroomListComponent {
	classroomList: ClassroomList[] = [];

	id: number = 0;
	name: string = '';
	teacher: string = '';
	studentCount: number = 0;

	addNewClassroom() {
		this.classroomList.push({
			id: this.id,
			name: this.name,
			teacher: this.teacher,
			studentCount: this.studentCount,
		});
		this.id = 0;
		this.name = '';
		this.teacher = '';
		this.studentCount = 0;
	}
}
