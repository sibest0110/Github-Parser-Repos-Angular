import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataHandlerService, repoSortedBy, repoType } from 'src/app/services/data-handler.service';
import { RepoRow } from 'src/app/model/repo-row';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  dataSource: RepoRow[] = [];

  constructor(
    private dataHandler: DataHandlerService,
    private httpClient: HttpClient){
  
    }

  ngOnInit(): void {
    this.dataSource = this.dataHandler.getRepos({url:"https://api.github.com/orgs/microsoft/repos"});
    
  }

  cellTemplateFunc_href(cellElement:any, cellInfo:any){
    var subContainer = document.createElement('div');
    subContainer.innerHTML = "<a href='" + cellInfo.data.linkUrl + "'>"+ cellInfo.data.linkUrl + "</a>"
  
    cellElement.appendChild(subContainer);
   } 
}
