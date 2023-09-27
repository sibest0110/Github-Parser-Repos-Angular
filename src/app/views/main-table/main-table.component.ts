import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  constructor(private dataHandler: DataHandlerService){

  }

  ngOnInit(): void {
    this.dataHandler.testPing();
  }
}
