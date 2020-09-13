import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../person-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Language } from '../language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  languageForm: FormGroup;
  language: Language = new Language();
  languageList: Language[];

  constructor(private service: PersonServiceService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getLanguages();
    this.languageForm = this.formBuilder.group({
      language: [null, Validators.required],
      proficiency: [null, Validators.required],
    });
  }
  getLanguages(): void {
    this.service.getLanguages()
      .subscribe(
        data => {
          this.languageList = data;
        }
      )
  }

  onSubmit() {
    this.language = <Language>this.languageForm.value;
    const result = this.language;
    this.service.postLanguage(result)
      .subscribe(data => {
        this.languageList = data;
      });
    console.log(result);
    this.router.navigate(['/language']);
    this.languageForm.reset();
  }
  deleteLanguage(language): void {
    this.languageList = this.languageList.filter(item => item != language);
    console.log(language);
    this.service.removeLanguage(language.id);
    this.router.navigate(['/language']);
  }

  moveForward() {
    this.router.navigate(['/achievement']);
  }

  moveBackward() {
    this.router.navigate(['/experience']);
  }




}
