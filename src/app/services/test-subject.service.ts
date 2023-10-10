import { Injectable } from '@angular/core';
import { DataHandlerService } from "./data-handler.service";
import { Subject } from "rxjs";
import { RepoRow } from '../model/repo-row';


@Injectable({
  providedIn: 'root'
})
export class TestSubjectService {

  public data$ = new Subject<RepoRow[]>();

  constructor(private dataHandler: DataHandlerService) { }

  public changeData(data: RepoRow[]){
    this.data$.next(data);
    
  }

}
