import {Component, OnInit} from '@angular/core';
import {Person} from '../Person';
import {PersonServiceService} from '../person-service.service';
import {Router} from '@angular/router';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {phoneNumberValidator} from '../validators/phone-validator';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent implements OnInit {
  personForm: FormGroup;
  person: Person = new Person();

  constructor(private formBuilder: FormBuilder, private router: Router, private service: PersonServiceService) { }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      address: [null, Validators.required],
      zipCode: [null, Validators.required],
      city: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phoneNumber: [null, [Validators.required, phoneNumberValidator, Validators.minLength(6)]],
      clauzule: [null]
    });
  }

  onSubmit(): any {
    this.person = <Person> this.personForm.value;
    const result = this.person

    this.service.createPerson(this.person);

    console.log(result);
    this.router.navigate(['/about-me']);

  }

  get firstName(){
    return this.personForm.get('firstName');
  }
  get lastName(){
    return this.personForm.get('lastName');
  }
  get address(){
    return this.personForm.get('address');
  }
  get city(){
    return this.personForm.get('city');
  }
  get zipCode(){
    return this.personForm.get('zipCode');
  }
  get email(){
    return this.personForm.get('email');
  }
  get phoneNumber(){
    return this.personForm.get('phoneNumber');
  }
  get clauzule(){
    return this.personForm.get('clauzule');
  }
}
