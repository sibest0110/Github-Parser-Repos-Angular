import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataHandlerService, repoSortedBy, repoType } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  constructor(private dataHandler: DataHandlerService,
    private httpClient: HttpClient){

  }

  ngOnInit(): void {
    // let q = this.dataHandler.getRepos({url:"https://api.github.com/orgs/microsoft/repos"});
    // console.log(q);
    
  }
}
