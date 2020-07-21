import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HobbyComponent } from './hobby/hobby.component';
import { SkillComponent } from './skill/skill.component';
import { CourseComponent } from './course/course.component';
import { LanguageComponent } from './language/language.component';
import { ProfileComponent } from './profile/profile.component';
import {PersonServiceService} from './person-service.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalComponent,
    ExperienceComponent,
    EducationComponent,
    HobbyComponent,
    SkillComponent,
    CourseComponent,
    LanguageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
