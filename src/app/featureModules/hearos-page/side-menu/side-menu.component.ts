import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InputModel } from 'src/app/models/input.model';
import { isTemplateExpression } from 'typescript';
import { HearosService } from '../hearos.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  formInputs:InputModel[] = [];
  counteries:any = [
    {key: 'Afghanistan', value: 'Afghanistan'},
    {key: 'United States', value: 'United States'},
    {key: 'Åland Islands', value: 'Åland Islands'}
  ];
  constructor(
    private hearosService:HearosService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.countryList();
    this.filterConfigs();
  }
  countryList() {
    // here api always failed 
    this.hearosService.getCounteryList().subscribe(
      data => {
       // console.log('hii data',data);
      },
      error => {
        // error case handling
      }
    )
  }
  filterConfigs() {
    this.hearosService.getFilterConfiguration().subscribe(
      data => {
        this.formInputs = this.mapFormField(data);
        this.getURlParams();
      },
      error => {
        // error case handling
      }
    )
  }
  mapFormField(res:any) {
    let formFeilds:InputModel[] = [];
    res.map((item:any, index:number) => {
      let obj:InputModel = {
        value: item.value? item.value: '' ,
        key: item.title? item.title: '' ,
        label: item.title =='Date' || item.title =='country' ? item.title: '' ,
        required: false,
        order: index,
        controlType: item.type,
        id: item.title,
        placeholder: item.title,
        options: item.type == 'dropdown' ? this.counteries : undefined
      }
      formFeilds.push(obj);
    });
    return formFeilds;
  }

  getFilterationInputs(values:any){
    this.router.navigate(['hearos/'],
      {
        queryParams: values,
      }
      );
  }

  getURlParams() {
    this.route.queryParams.subscribe(params => {
      if(params && params !== undefined) {
        this.formInputs = this.formInputs.map(item => {
          item.value = params[item.key];
          return item
        });
      }
  });
  }

}
