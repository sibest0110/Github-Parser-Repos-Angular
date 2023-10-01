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

  loadingVisible: boolean = true;
  popupVisible: boolean = false;
  selectedRepo: string = '';

  ngOnInit():void {
    this.loadRepos();
  }

  async loadRepos() {
    this.loadingVisible = await true;
    this.repoSource = await this.dataHandler.getRepos({ url: "https://api.github.com/orgs/microsoft/repos"});
    this.loadingVisible = await false;
    return ;
  }


  async openIssuesOfRepo(e: any) {
    this.loadingVisible = await true;
    this.popupVisible = await true;

    this.selectedRepo = await e.data.name;

    this.issuesSource = await this.dataHandler.getIssues(this.selectedRepo, 15);

    this.loadingVisible = await false;
  }



  cellTemplateFunc_href(cellElement:any, cellInfo:any){
    var subContainer = document.createElement('div');
    subContainer.innerHTML = "<a target='_blank' href='" + cellInfo.data.linkUrl + "'>"+ cellInfo.data.linkUrl + "</a>"
  
    cellElement.appendChild(subContainer);
   } 
}
