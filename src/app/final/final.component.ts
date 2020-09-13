import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../person-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private service: PersonServiceService) { }

  ngOnInit(): void {
    this.service.finallize();
  }

  public saveFile(): any {
    this.service.downloadFile().subscribe((data) => {
      setTimeout('4500');
      var downloadURL = window.URL.createObjectURL(data);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "resume-"+ localStorage.getItem('firstName')+"_" + localStorage.getItem('lastName') + ".pdf";
      link.click();
    });
  }

}
