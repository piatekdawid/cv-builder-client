import { Component, OnInit, ViewChild, resolveForwardRef } from '@angular/core';
import { PersonServiceService } from '../person-service.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileList: string[];
  profileControl = new FormControl();

  constructor(private personService: PersonServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.personService.getProfile()
      .subscribe(
        data => {
          this.profileList = data;
        }
      )

  }
  deleteProfile(name: string): void {
    this.profileList = this.profileList.filter(item => item != name);
    this.personService.removeProfile(name);
    this.router.navigate(['/profile']);
  }
  onSubmit(data: string): any {
    const profile: string = data;
    this.personService.putProfile(profile).subscribe(data => {
      this.profileList = data;
    });
    console.log(this.profileList);
    this.profileControl.reset();
    this.router.navigate(['/profile']);
  }
  moveForward() {
    this.router.navigate(['/skill']);
  }

  moveBackward() {
    this.router.navigate(['/achievement']);
  }


}
