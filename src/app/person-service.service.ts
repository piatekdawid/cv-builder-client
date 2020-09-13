import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, JsonpClientBackend, HttpHeaders } from '@angular/common/http';
import { Person } from './Person';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Language } from './language';
import { Achievement } from './achievement';
import { Education } from './education';
import { Experience } from './experience';

@Injectable({
  providedIn: 'root'

})
export class PersonServiceService {

  public personsUrl: string;
  public message: string;

  constructor(private http: HttpClient) {
    this.personsUrl = 'http://localhost:8080/api/person/';
  }

  public createPerson(data): any {
    return this.http.post(this.personsUrl, data, { responseType: 'json' })
      .subscribe((resp) => {
        const json = JSON.stringify(resp);
        const obj = JSON.parse(json);
        localStorage.setItem('id', obj.id);
        localStorage.setItem('firstName', obj.firstName);
        localStorage.setItem('lastName', obj.lastName);
        console.log(obj.id);
      });
  }

  public putAboutMe(aboutMe: string): any {
    return this.http.put(this.personsUrl + localStorage.getItem('id') + '/about-me', aboutMe, { responseType: 'text' as 'json' })
      .subscribe((result) => {
        console.warn('aboutMe', result);
      });
  }

  public postEducation(data): Observable<Education[]> {
    return this.http.post<Education[]>(this.personsUrl + localStorage.getItem('id') + '/education/', data, { responseType: 'json' });
  }
  public removeEducation(education){
    return this.http.delete(this.personsUrl + localStorage.getItem('id') + '/education/' + education)
    .subscribe((result) => {
      console.warn('educations:', result);
    });
  }
  public getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.personsUrl + localStorage.getItem('id') + '/education/');
  }
  public postExperience(data): Observable<Experience[]> {
    return this.http.post<Experience[]>(this.personsUrl + localStorage.getItem('id') + '/experience/', data, { responseType: 'json' });
  }
  public removeExperience(experience){
    return this.http.delete(this.personsUrl + localStorage.getItem('id') + '/experience/' + experience)
    .subscribe((result) => {
      console.warn('experiences:', result);
    });
  }
  public getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.personsUrl + localStorage.getItem('id') + '/experience/');
  }
  public postAchievement(data): Observable<Achievement[]> {
    return this.http.post<Achievement[]>(this.personsUrl + localStorage.getItem('id') + '/achievement/', data, { responseType: 'json' });
  }
  public removeAchievement(achievement){
    return this.http.delete(this.personsUrl + localStorage.getItem('id') + '/achievement/' + achievement)
    .subscribe((result) => {
      console.warn('achievements:', result);
    });
  }
  public getAchievements(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(this.personsUrl + localStorage.getItem('id') + '/achievement/');
  }
  //
  public postLanguage(data): Observable<Language[]> {
    return this.http.post<Language[]>(this.personsUrl + localStorage.getItem('id') + '/language/', data, { responseType: 'json' });
  }
  public removeLanguage(language){
    return this.http.delete(this.personsUrl + localStorage.getItem('id') + '/language/' + language)
    .subscribe((result) => {
      console.warn('languages:', result);
    });
  }
  public getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.personsUrl + localStorage.getItem('id') + '/language/');
  }

  public putHobby(hobby: string): Observable<string[]> {
    return this.http.put<string[]>(this.personsUrl + localStorage.getItem('id') + '/hobbies', hobby);
  }
  public removeHobby(hobby: string){
    return this.http.delete(this.personsUrl + localStorage.getItem('id') + '/hobbies/' + hobby)
    .subscribe((result) => {
      console.warn('hobbies:', result);
    });
  }
  public getHobbies(): Observable<string[]> {
    return this.http.get<string[]>(this.personsUrl + localStorage.getItem('id') + '/hobbies/');
  }

  public putProfile(profile: string): Observable<string[]> {
    return this.http.put<string[]>(this.personsUrl + localStorage.getItem('id') + '/profiles', profile);
  }
  public removeProfile(name: string){
    return this.http.delete(this.personsUrl + localStorage.getItem('id') + '/profiles/' + name)
    .subscribe((result) => {
      console.warn('profiles:', result);
    });
  }
  public getProfile(): Observable<string[]> {
    return this.http.get<string[]>(this.personsUrl + localStorage.getItem('id') + '/profiles/');
  }

  public putSkill(skill: string): Observable<string[]> {
    return this.http.put<string[]>(this.personsUrl + localStorage.getItem('id') + '/skills', skill);
  }
  public removeSkill(name: string){
    return this.http.delete(this.personsUrl + localStorage.getItem('id') + '/skills/' + name)
    .subscribe((result) => {
      console.warn('skills:', result);
    });
  }
  public getSkills(): Observable<string[]> {
    return this.http.get<string[]>(this.personsUrl + localStorage.getItem('id') + '/skills/');
  }

  public finallize(): any {
    return this.http.get(this.personsUrl + localStorage.getItem('id') + '/finalize', { responseType: 'text' as 'json' })
      .subscribe((result) => {
        var jsonob = JSON.stringify(result);
        this.message = jsonob;
        console.warn('message', this.message);
      })
  }

  public downloadFile(): Observable<Blob> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(this.personsUrl + localStorage.getItem('id') + '/getResume', { headers: headers, responseType: 'blob' });
  }

}
