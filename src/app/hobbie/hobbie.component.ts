import { Component, OnInit, ViewChild } from '@angular/core';
import {PersonServiceService} from '../person-service.service';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hobbie',
  templateUrl: './hobbie.component.html',
  styleUrls: ['./hobbie.component.css']
})
export class HobbieComponent implements OnInit {

  hobbyList: string[] = [];
  hobbyControl = new FormControl();

  constructor(private personService: PersonServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getHobbies();
  }

  getHobbies(): void {
    this.personService.getHobbies()
      .subscribe(
        data => {
          this.hobbyList = data;
        }
      )

  }
  deleteHobby(name: string): void {
    this.hobbyList = this.hobbyList.filter(item => item != name);
    this.personService.removeHobby(name);
    this.router.navigate(['/hobby']);
  }
  onSubmit(data: string): any {
    const hobby: string = data;
    this.personService.putHobby(hobby).subscribe(data => {
      this.hobbyList = data;
    });
    console.log(this.hobbyList);
    this.hobbyControl.reset();
    this.router.navigate(['/hobbie']);
  }
  moveForward() {
    this.router.navigate(['/finalize']);
  }

  moveBackward() {
    this.router.navigate(['/skill']);
  }
}
