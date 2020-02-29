import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl:'./course-list.component.html',
    styleUrls:['course-list.css']
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];
    _filterBy:string;
    filteredCourses: Course[] = [];
    constructor(private courseService :CourseService ){

    }
    ngOnInit():void{
      this.courses = this.courseService.selectAll();
      this.filteredCourses = this.courses;
    }

    set filter(val :string){
        this._filterBy = val;
        this.filteredCourses = this.courses.filter((one: Course )=>one.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())>-1);
    }
    get filter(){
        return this._filterBy;
    }
}