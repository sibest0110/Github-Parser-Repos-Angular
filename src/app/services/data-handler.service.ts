import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RepoRow } from '../model/repo-row';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  
  constructor(private httpClient: HttpClient) { }

  getRepos(url:string, repoPerPage?:number, page?:number): RepoRow[]{
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
    urlTail = urlArgs.join("&");
    if (urlTail){
      url += `?${urlTail}`;
    }
    //#endregion
    
    this.httpClient.get(url).subscribe({
      next: (data: any) => {
        alert("Данные получены успешно");
        // console.log(data);
        for (const obj of data) {
          result.push(
            new RepoRow(
              obj['name'],
              obj['language'] ?? "",
              new Date(obj['pushed_at']),
              obj['archived'] == 'true' ? true : false,
              obj['html_url'])
          );
        }
      },
      error: error => alert("Не удалось получить данные")
    });

    return result;
  }


}
