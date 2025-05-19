import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {
    path : "" ,                  // Default page !!
    component : HomeComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "skills",
    component : SkillsComponent
  },
  {
    path : "experiences",
    component : ExperiencesComponent
  },
  {
    path : "certification",
    component : CertificationComponent
  },
  {
    path : "projects",
    component : ProjectsComponent
  },
  {
    path : "contact",
    component : ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
