import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {PersonalComponent} from './personal/personal.component';
import {SkillComponent} from './skill/skill.component';
import {LanguageComponent} from './language/language.component';
import {CourseComponent} from './course/course.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'education', component: EducationComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'course', component: CourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
