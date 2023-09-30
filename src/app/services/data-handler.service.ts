import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RepoRow } from '../model/repo-row';
import { IssueRow } from '../model/issue-row';

export enum repoSortedBy {created='created', updated='updated', pushed='pushed', full_name='full_name'};
export enum repoSortedDirection {asc='asc', desc='desc'};
export enum repoType {all='all', public='public', private='private', forks='forks', sources='sources', member='member'};

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(private httpClient: HttpClient) { }

  getRepos({
    url='https://api.github.com/orgs/microsoft/repos',
    repoPerPage=undefined,
    page=undefined,
    sortedBy=undefined,
    sortedDirection=undefined,
    type=undefined
  }:{
    url:string,
    repoPerPage?:number,
    page?:number,
    sortedBy?:repoSortedBy,
    sortedDirection?:repoSortedDirection,
    type?:repoType
  }): RepoRow[]{
    let result: RepoRow[] = [];
    
    //#region Формирование url
    let urlTail: string = "";
    let urlArgs: string[] = [];
    if (repoPerPage) {
      urlArgs.push(`per_page=${repoPerPage}`);
    }
    if (page) {
      urlArgs.push(`page=${page}`);
    }
    if (sortedBy) {
      urlArgs.push(`sort=${sortedBy}`);
    }
    if (sortedDirection) {
      urlArgs.push(`direction=${sortedDirection}`);
    }
    if (type) {
      urlArgs.push(`type=${type}`);
    }

    urlTail = urlArgs.join("&");
    if (urlTail){
      url += `?${urlTail}`;
    }
    //#endregion
    
    this.httpClient.get(url).subscribe({
      next: (data: any) => {
        // alert("Данные получены успешно");
        // console.log(data);
        for (const obj of data) {
          result.push(
            new RepoRow(
              obj['name'],
              obj['language'] ?? "",
              new Date(obj['pushed_at']).toLocaleDateString('ru-RU', RepoRow.dateOptions),
              obj['archived'] == 'true' ? 'Да' : 'Нет',
              obj['html_url'])
          );
        }
      },
      error: error => alert("Не удалось получить данные")
    });

    return result;
  }

  getIssues(repoName: string, perPage: number): IssueRow[]{
    let url:string = `https://api.github.com/repos/microsoft/${repoName}/issues?state=all&sort=created&per_page=${perPage}`;
    let result: IssueRow[] = [];

    this.httpClient.get(url).subscribe({
      next: (data: any) => {
        // alert("Данные получены успешно");
        // console.log(data);
        for (const obj of data) {
          result.push(
            new IssueRow(
              new Date(obj['created_at']).toLocaleDateString('ru-RU', IssueRow.dateOptions),
              obj['title'],
              obj['body'])
          );
        }
      },
      error: error => alert("Не удалось получить данные")
    });

    return result;
  }
}
