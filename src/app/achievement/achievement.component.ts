import { Component, OnInit } from '@angular/core';
import {PersonServiceService} from '../person-service.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Achievement} from '../achievement';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {

  achievementForm: FormGroup;
  achievement: Achievement = new Achievement();
  achievementList: Achievement[];

  constructor(private service: PersonServiceService, private router: Router, private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.getAchievements();
    this.achievementForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
    })
  }

  getAchievements(): void {
    this.service.getAchievements()
      .subscribe(
        data => {
          this.achievementList = data;
        }
      )
  }

  onSubmit() {
    this.achievement = <Achievement>this.achievementForm.value;
    const result = this.achievement;
    this.service.postAchievement(result)
      .subscribe(data => {
        this.achievementList = data;
      });
    console.log(result);
    this.router.navigate(['/achievement']);
    this.achievementForm.reset();
  }
  deleteAchievement(achievement): void {
    this.achievementList = this.achievementList.filter(item => item != achievement);
    console.log(achievement);
    this.service.removeAchievement(achievement.id);
    this.router.navigate(['/achievement']);
  }

  // onSubmit(){
  //   this.achievement = <Achievement> this.achievementForm.value;
  //   const result = this.achievement;
  //   this.service.postAchievement(result);
  //   console.log(result);
  //   this.router.navigate(['/achievement']);
  //   this.achievementForm.reset();
  // }

  moveForward(){
    this.router.navigate(['/profile']);
  }

  moveBackward(){
    this.router.navigate(['/language']);
  }



}
