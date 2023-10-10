import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataHandlerService, repoSortedBy, repoType } from 'src/app/services/data-handler.service';
import { TestSubjectService } from 'src/app/services/test-subject.service';
import { RepoRow } from 'src/app/model/repo-row';
import { IssueRow } from 'src/app/model/issue-row';
import { SubscriptionLike } from 'rxjs';


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
    private httpClient: HttpClient,
    private testSubject: TestSubjectService) {

  }

  loadingVisible: boolean = true;
  popupVisible: boolean = false;
  selectedRepo: string = '';

  // private subs: SubscriptionLike = undefined;

  ngOnInit(): void {
    this.loadRepos();
    // this.subs = this.testSubject.data$.subscribe((data) => this.repoSource = data);
    this.testSubject.data$.subscribe((data) => this.repoSource = data);
  }

  ngOnDestroy(): void {
    // this.subs.unsubscribe();
  }

  async loadRepos() {
    this.loadingVisible = await true;
    this.repoSource = await this.dataHandler.getRepos({ url: "https://api.github.com/orgs/microsoft/repos", repoPerPage: 100 });
    this.loadingVisible = await false;
    return;
  }


  async openIssuesOfRepo_handler(e: any) {
    this.loadingVisible = await true;
    this.popupVisible = await true;

    this.selectedRepo = await e.data.name;

    this.issuesSource = await this.dataHandler.getIssues(this.selectedRepo, 15);

    this.loadingVisible = await false;
  }

  openIssue_handler(e: any) {
    window.open(e.data.linkUrl, '_blank');
  }


  cellTemplateFunc_href(cellElement: HTMLElement, cellInfo: any) {
    var subContainer = document.createElement('div');
    subContainer.innerHTML = "<a target='_blank' href='" + cellInfo.data.linkUrl + "'>" + cellInfo.data.linkUrl + "</a>"

    cellElement.appendChild(subContainer);
  }

  popupOnHidden_handler(e: any) {
    this.issuesSource = [];
  }
}
