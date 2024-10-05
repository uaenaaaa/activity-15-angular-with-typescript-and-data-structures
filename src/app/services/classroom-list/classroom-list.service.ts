import { Injectable } from '@angular/core';
import ClassroomList from '@app/interface/classroom-list';

@Injectable({
	providedIn: 'root',
})
export class ClassroomListService {
	private classrooms: ClassroomList[] = [];

	constructor() {}

	addClassroom(
		id: number,
		name: string,
		teacher: string,
		studentCount: number,
	): void {
		this.classrooms.push({
			id: id,
			name: name,
			teacher: teacher,
			studentCount: studentCount,
		});
	}

	getClassrooms(): ClassroomList[] {
		return this.classrooms;
	}
}
