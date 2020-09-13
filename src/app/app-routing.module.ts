import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EducationComponent} from './education/education.component';
import {PersonalComponent} from './personal/personal.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ExperienceComponent} from './experience/experience.component'
import {AchievementComponent} from './achievement/achievement.component'
import {LanguageComponent} from './language/language.component'
import {HobbieComponent} from './hobbie/hobbie.component'
import {ProfileComponent} from './profile/profile.component'
import {SkillComponent} from './skill/skill.component'
import {FinalComponent} from './final/final.component'
import {Home2Component} from './home2/home2.component'


const routes: Routes = [
  { path: '', component: Home2Component },
  { path: 'personal', component: PersonalComponent },
  { path: 'education', component: EducationComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'achievement', component: AchievementComponent},
  { path: 'language', component: LanguageComponent},
  { path: 'hobbie', component: HobbieComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'skill', component: SkillComponent},
  { path: 'finalize', component: FinalComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
