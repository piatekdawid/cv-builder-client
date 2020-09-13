import { Component, OnInit } from '@angular/core';
import {PersonServiceService} from '../person-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private personService: PersonServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data: string): any {
    const aboutMe: string = data;
    console.log(aboutMe);
    this.personService.putAboutMe(aboutMe);
    this.router.navigate(['/education']);
  }
}
