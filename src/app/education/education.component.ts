import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../person-service.service';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Education } from '../education';
import { dateValidator } from '../validators/date-validator'


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationForm: FormGroup;
  education: Education = new Education();
  educationList: Education[];

  constructor(private service: PersonServiceService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getEducations();
    this.educationForm = this.formBuilder.group({
      startedSchool: [null, [Validators.required, dateValidator]],
      finishedSchool: [null, [Validators.required, dateValidator]],
      course: [null],
      city: [null, Validators.required],
      degree: [null],
      schoolName: [null, Validators.required],
      additionalInfo: [null],
    });
  }

  getEducations(): void {
    this.service.getEducations()
      .subscribe(
        data => {
          this.educationList = data;
        }
      )
  }

  onSubmit() {
    this.education = <Education>this.educationForm.value;
    const result = this.education;
    this.service.postEducation(result)
      .subscribe(data => {
        this.educationList = data;
      });
    console.log(result);
    this.router.navigate(['/education']);
    this.educationForm.reset();
  }
  deleteEducation(education): void {
    this.educationList = this.educationList.filter(item => item != education);
    console.log(education);
    this.service.removeEducation(education.id);
    this.router.navigate(['/education']);
  }

  // onSubmit(): any {
  //   this.education = <Education>this.educationForm.value;
  //   const result = this.education;
  //   this.service.postEducation(result);

  //   console.log(result);

  //   this.router.navigate(['/education']);
  //   this.educationForm.reset();
  // }

  moveForward():void{
    this.router.navigate(['/experience']);
  }

  moveBackward():void{
    this.router.navigate(['/personal']);
  }

  get startedSchool() {
    return this.educationForm.get('startedSchool');
  }
  get finishedSchool() {
    return this.educationForm.get('finishedSchool');
  }
  get city() {
    return this.educationForm.get('city');
  }
  get schoolName() {
    return this.educationForm.get('schoolName');
  }

}
