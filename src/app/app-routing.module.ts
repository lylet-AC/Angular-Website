import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: "Home"} },
  // { path: 'experience', component: ExperienceComponent, data: { title: "Experience" } },
  { path: 'projects', component: ProjectsComponent, data: { title: "Projects" } },
  { path: 'resume', component: ResumeComponent, data: { title: "Resumé"} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
