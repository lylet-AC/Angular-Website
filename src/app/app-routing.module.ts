import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: "Home"} },
  { path: 'about-me', component: AboutMeComponent, data: { title: "About Me" } },
  { path: 'projects', component: ProjectsComponent, data: { title: "Projects" } },
  { path: 'resume', component: ResumeComponent, data: { title: "Resumé"} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
