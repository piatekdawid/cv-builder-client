import { Component, OnInit } from '@angular/core';
import {PersonServiceService} from '../person-service.service';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillList: string[] = [];
  skillControl = new FormControl();

  constructor(private personService: PersonServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.personService.getSkills()
      .subscribe(
        data => {
          this.skillList = data;
        }
      )

  }
  deleteSkill(name: string): void {
    this.skillList = this.skillList.filter(item => item != name);
    this.personService.removeSkill(name);
    this.router.navigate(['/skill']);
  }
  onSubmit(data: string): any {
    const skill: string = data;
    this.personService.putSkill(skill).subscribe(data => {
      this.skillList = data;
    });
    console.log(this.skillList);
    this.skillControl.reset();
    this.router.navigate(['/skill']);
  }
  moveForward() {
    this.router.navigate(['/hobbie']);
  }

  moveBackward() {
    this.router.navigate(['/profile']);
  }
}
