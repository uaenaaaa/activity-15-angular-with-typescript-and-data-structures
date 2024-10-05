import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ClassroomList from '@app/interface/classroom-list';
import { ClassroomListService } from '@app/services/classroom-list/classroom-list.service';

@Component({
	selector: 'app-classroom-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './classroom-list.component.html',
	styles: ``,
})
export class ClassroomListComponent {
	classroomList = [] as ClassroomList[];
	constructor(private classroomService: ClassroomListService) {
		this.classroomList = this.classroomService.getClassrooms();
	}

	id: number = 0;
	name: string = '';
	teacher: string = '';
	studentCount: number = 0;

	addNewClassroom() {
		this.classroomService.addClassroom(
			this.id,
			this.name,
			this.teacher,
			this.studentCount,
		);
		this.id = 0;
		this.name = '';
		this.teacher = '';
		this.studentCount = 0;
	}
}
