import { Component } from '@angular/core';
import { RepoRow } from "src/app/model/repo-row";
import { DataHandlerService } from "src/app/services/data-handler.service";
import { TestSubjectService } from "src/app/services/test-subject.service";

@Component({
  selector: 'app-test-prizm',
  templateUrl: './test-prizm.component.html',
  styleUrls: ['./test-prizm.component.css']
})
export class TestPrizmComponent {

  repoData: RepoRow[] = [];

constructor(private dataHandler: DataHandlerService, private testSubject: TestSubjectService){}


  async loadDefaultRepos(){
    this.repoData = await this.dataHandler.getRepos({ url: "https://api.github.com/orgs/microsoft/repos", repoPerPage: 100, page: 1});
    this.testSubject.changeData(this.repoData);
    return ;
  }

  async loadRandomRepos() {
    let randomPerPage = Math.floor(Math.random()*10) + 1;
    let randomPage = Math.floor(Math.random()*10) + 1;
    // alert(`Страница ${randomPage}\nЭлементов ${randomPerPage}`);
    this.repoData = await this.dataHandler.getRepos({ url: "https://api.github.com/orgs/microsoft/repos", repoPerPage: randomPerPage, page: randomPage});
    this.testSubject.changeData(this.repoData);
    return ;
  }


}
