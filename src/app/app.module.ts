import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonServiceService } from './person-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { AchievementComponent } from './achievement/achievement.component';
import { LanguageComponent } from './language/language.component';
import { HobbieComponent } from './hobbie/hobbie.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillComponent } from './skill/skill.component';
import { FinalComponent } from './final/final.component';
import { Home2Component } from './home2/home2.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    AboutMeComponent,
    EducationComponent,
    ExperienceComponent,
    AchievementComponent,
    LanguageComponent,
    HobbieComponent,
    ProfileComponent,
    SkillComponent,
    FinalComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PersonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
