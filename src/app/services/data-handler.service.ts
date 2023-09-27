import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  organisationName: string = 'microsoft';
  page: number = 1;
  repoPerPage:number = 10;
  url:string = `https://api.github.com/orgs/microsoft/repos?per_page=${this.repoPerPage}&page=${this.page}`;

  constructor() { }

  testPing(): void{
    alert("PING DATA-HANDLER");
    console.log("PING DATA-HANDLER");
    
  }
}
