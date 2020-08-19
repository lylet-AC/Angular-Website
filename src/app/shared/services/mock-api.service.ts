import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Contact, Link, Social } from '../entities/entities';

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
      { name: "Blog", route: "/blog" },
      { name: "Projects", route: "/projects" },
      { name: "Resumé", route: "/resume" }
    ];
    requests.push({ route: "links", method: Method.Get, data: links });

    let socials: Social[] = [
      { name: "Github", link: "https://github.com/lylet-AC" },
      { name: "LinkdIn", link: "https://www.linkedin.com/in/tyler-lyle/" },
      { name: "Twitter", link: "https://twitter.com/lylet_AC"}
    ]
    requests.push({ route: "socials", method: Method.Get, data: socials });

    return requests;
  }

  Get(route) {
    return new Observable<any>((data) => {
      this.mockedRequests.forEach(request => {
        if (request.route === route && request.method === Method.Get) {
          data.next(request.data);
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

enum Method 
  { 
    Get, 
    Post, 
    Delete
  };