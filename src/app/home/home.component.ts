import { Component, OnInit, TemplateRef } from '@angular/core';
import { HomeService } from '../home.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataList: any;
  modalRef: BsModalRef; 
  //modal config for center aligned.
  config = {
    class: 'modal-lg modal-dialog-centered'
  }
  titleFilter: any = { title: '' };

  constructor(private homeservice: HomeService ,private modalService: BsModalService) { }

  ngOnInit() {
    this.getData();
  }

  //Fetching data from service using getdata method.
  getData() {
    //interval for poll Api for every 10 secs.
    interval(10000).pipe(startWith(0),switchMap(() => 
      this.homeservice.getDetails())).subscribe(res => { 
        this.dataList = res['hits'];
      });
  }

  //Open modal for row details.
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,this.config);
  }

}
