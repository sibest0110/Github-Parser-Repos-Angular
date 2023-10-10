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


  test(){
    alert('кнопка нажата2');

  }

  async loadRepos() {
    alert('кнопка нажата');
    this.repoData = await this.dataHandler.getRepos({ url: "https://api.github.com/orgs/microsoft/repos", repoPerPage: 4, page: 8});
    this.testSubject.changeData(this.repoData);
    return ;
  }


}
