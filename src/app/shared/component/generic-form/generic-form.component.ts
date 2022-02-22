import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputModel } from 'src/app/models/input.model';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {

  form!: FormGroup;
  @Input() formInputs: InputModel[] = [];
  @Output() formResult : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.form = this.toFormGroup(this.formInputs);
  }

  toFormGroup(formInputs: InputModel[]) {
    const group: any = {};
    formInputs.map((item: InputModel,index:number) => {
      group[item.key] = item.required ? new FormControl(item.value || '', Validators.required)
                                              : new FormControl(item.value || '');
    });
    return new FormGroup(group);
  }
  getFormData(data:any){
    this.formResult.emit(data);
  }

}
