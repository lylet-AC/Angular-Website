import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Contact, Link, Social, Project, Language } from '../entities/entities';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  mockedRequests: Request[] = [];

  constructor() {
    this.mockedRequests = this.PopulateRequests();
   }

  private PopulateRequests() {
    let requests: Request[] = [];
    
    let contacts: Contact[] = [
      { name: "Phone", value: "814-464-3068" },
      { name: "Email", value: "jobsearch_lylet@yahoo.com" },
    ];
    requests.push({ route: "contacts", method: Method.Get, data: contacts });

    let links: Link[] =[
      { name: "About Me", route: "/about-me" },
      { name: "Projects", route: "/projects" },
      { name: "Resumé", route: "/resume" }
    ];
    requests.push({ route: "links", method: Method.Get, data: links });

    let socials: Social[] = [
      { name: "Github", link: "https://github.com/lylet-AC" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/tyler-lyle/" },
      { name: "Twitter", link: "https://twitter.com/lylet_AC"}
    ];
    requests.push({ route: "socials", method: Method.Get, data: socials });

    let projects: Project[] = [
      { language: Language.Python, title: "GatorGauge", link: "https://github.com/GatorGauge/GatorGauge", description: "Gatorguage is a tool that allows professors to easily gain information on practicals and laboratory assignments completed by their students. GatorGauge does this by enabling professors to download and analyze the information in student repositories." },
      { language: Language.Python, title: "GatorGrouper", link: "https://github.com/GatorIncubator/gatorgrouper", description: "GatorGrouper is a program that assigns a list of students to groups of a specified size. The output of this program could then be communicated to the students in a specific class in order to assign randomized groups." },
      { language: Language.Python, title: "Accelegator", link: "https://github.com/Accelegator/accelegator", description: "Accelegator is an adaptive advising tool written to help advisors help their students. The program takes information on individual and multiple advisees, analyzing, compiling, and displaying it for the advisor in a helpful manner." },
      { language: Language.Other, title: "Portfolio", link: "https://github.com/lylet-AC/portfolio", description: "Portfolio is a repository with projects in which there was no collaboration. This is an example of work I have done and my progress as a student." },
      { language: Language.Python, title: "BlockBuster", link: "https://github.com/lylet-AC/blockbuster", description: "BlockBuster is a repository containing a game created for the Computer Science 480 course. BlockBuster is a game that resembles an arkanoid type game with a twist!" },
      { language: Language.JavaScript, title: "Angular Website", link: "https://github.com/lylet-AC/Angular-Website", description: "Angular-Website is a repository that contains the coding for this website. This website is built using Angular and delivered through continuous integrateion to netlify via github." },
    ];
    requests.push({ route: "projects", method: Method.Get, data: projects });

    return requests;
  }

  Get(route) {
    return new Observable<any>((data) => {
      this.mockedRequests.forEach(request => {
        if (request.route === route && request.method === Method.Get) {
          data.next(request.data);
          console.log("MockAPIService ~ Requested Route: `" + route + "` for Method: `Get` has Data: ");
          console.log(request.data);
        }
      });
    });


  }

}

class Request {
  route: string;
  method: Method;
  data: any;
}

enum Method { 
  Get, 
  Post, 
  Delete
};