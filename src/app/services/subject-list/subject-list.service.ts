import { Injectable } from '@angular/core';
import SubjectList from '@app/interface/subject-list';

@Injectable({
	providedIn: 'root',
})
export class SubjectListService {
	private subjects: SubjectList[] = [];

	constructor() {}

	addSubject(id: number, name: string, teacher: string): void {
		this.subjects.push({
			id: id,
			name: name,
			teacher: teacher,
		});
	}

	getSubjects(): SubjectList[] {
		return this.subjects;
	}
}
