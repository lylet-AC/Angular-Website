import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: "Home"} },
  { path: 'about-me', component: AboutMeComponent, data: { title: "About Me" } },
  { path: 'projects', component: ProjectsComponent, data: { title: "Projects" } },
  { path: 'blog', component: BlogComponent, data: { title: "Blog" } },
  { path: 'resume', component: ResumeComponent, data: { title: "Resumé"} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
