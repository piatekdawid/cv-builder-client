import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../person-service.service';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Experience } from '../experience';
import { dateValidator } from '../validators/date-validator'


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceForm: FormGroup;
  experience: Experience = new Experience();
  experienceList: Experience[];

  constructor(private service: PersonServiceService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getExperiences();
    this.experienceForm = this.formBuilder.group({
      dateStarted: [null, [Validators.required, dateValidator]],
      dateEnded: [null, [Validators.required, dateValidator]],
      place: [null, Validators.required],
      position: [null, Validators.required],
      companyName: [null, Validators.required],
      shortDescription: [null],
    });
  }

  getExperiences(): void {
    this.service.getExperiences()
      .subscribe(data => {
        this.experienceList = data;
      })
  }

  onSubmit() {
    this.experience = <Experience>this.experienceForm.value;
    const result = this.experience;
    this.service.postExperience(result)
      .subscribe(data => {
        this.experienceList = data;
      });
    console.log(result);
    this.router.navigate(['/experience']);
    this.experienceForm.reset();
  }
  deleteEducation(experience):void{
    this.experienceList = this.experienceList.filter(item => item != experience);
    console.log(experience);
    this.service.removeExperience(experience);
    this.router.navigate(['/experience']);
  }

  public moveForward(): void {
    this.router.navigate(['/language']);
  }

  public moveBackward(): void {
    this.router.navigate(['/education']);
  }

  get dateStarted() {
    return this.experienceForm.get('dateStarted');
  }
  get dateEnded() {
    return this.experienceForm.get('dateEnded');
  }
  get place() {
    return this.experienceForm.get('place');
  }
  get position() {
    return this.experienceForm.get('position');
  }
  get companyName() {
    return this.experienceForm.get('companyName');
  }

}
