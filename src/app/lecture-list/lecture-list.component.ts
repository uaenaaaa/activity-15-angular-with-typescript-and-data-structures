import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LectureList from '@app/interface/lecture-list';
import { LectureListService } from '@app/services/lecture-list/lecture-list.service';

@Component({
	selector: 'app-lecture-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './lecture-list.component.html',
	styles: ``,
})
export class LectureListComponent {
	lectureList = [] as LectureList[];
	constructor(private lectureListService: LectureListService) {
		this.lectureList = this.lectureListService.getLectures();
	}

	id: number = 0;
	name: string = '';
	duration: number = 0;
	instructor: string = '';

	addLecture() {
		this.lectureListService.addLecture(
			this.id,
			this.name,
			this.duration,
			this.instructor,
		);
		this.id = 0;
		this.name = '';
		this.duration = 0;
		this.instructor = '';
	}
}
