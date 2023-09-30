import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataHandlerService, repoSortedBy, repoType } from 'src/app/services/data-handler.service';
import { RepoRow } from 'src/app/model/repo-row';
import { IssueRow } from 'src/app/model/issue-row';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  repoSource: RepoRow[] = [];
  issuesSource: IssueRow[] = [];

  constructor(
    private dataHandler: DataHandlerService,
    private httpClient: HttpClient){
  
    }

  ngOnInit(): void {
    this.repoSource = this.dataHandler.getRepos({url:"https://api.github.com/orgs/microsoft/repos"});
    
  }

  popupVisible: boolean = false;
  selectedRepo: string = '';
  openIssuesOfRepo(e: any): void{
    this.popupVisible = true;
    this.selectedRepo = e.data.name;
    this.issuesSource = this.dataHandler.getIssues(this.selectedRepo, 15);
    
  }

  cellTemplateFunc_href(cellElement:any, cellInfo:any){
    var subContainer = document.createElement('div');
    subContainer.innerHTML = "<a href='" + cellInfo.data.linkUrl + "'>"+ cellInfo.data.linkUrl + "</a>"
  
    cellElement.appendChild(subContainer);
   } 
}
