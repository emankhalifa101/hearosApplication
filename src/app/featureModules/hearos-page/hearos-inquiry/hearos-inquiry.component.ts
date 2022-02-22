import { Component, OnInit } from '@angular/core';
import { Ihearo } from 'src/app/models/hearo.model';
import { HearosService } from '../hearos.service';

@Component({
  selector: 'app-hearos-inquiry',
  templateUrl: './hearos-inquiry.component.html',
  styleUrls: ['./hearos-inquiry.component.scss']
})
export class HearosInquiryComponent implements OnInit {

  tableHead = ["Name" , "Phone" , "Email" , "Date" , "countery" , "company"];
  hearosList: Ihearo[] = [];
  displayedList: Ihearo[] = [] ;

  constructor(private hearosService: HearosService) { }

  ngOnInit(): void {
    this.getAllHearosData();

  }

  getAllHearosData() {
    this.hearosService.getHEarosList().subscribe(
      data => {
        this.hearosList = this.sortDataByNAme(data);
        this.displayedList = [... this.hearosList]
      },
      error => {
        // error case handling
      }
    )
  }
  sortDataByNAme(data:any) {
    return data.sort((a:any, b:any) => a.username !== b.username ? a.username < b.username ? -1 : 1 : 0);
  }
  getSearchVal(event:any) {
    this.displayedList = this.hearosList.filter((ele:any) => ele.username.includes(event.target.value))
  }


}
