import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HearosPageRoutingModule } from './hearos-page-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HearosInquiryComponent } from './hearos-inquiry/hearos-inquiry.component';
import { HearosPageComponent } from './hearos-page.component';
import { GenericFormComponent } from 'src/app/shared/component/generic-form/generic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HearosPageComponent,
    HeaderComponent,
    SideMenuComponent,
    HearosInquiryComponent,
    GenericFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HearosPageRoutingModule
  ]
})
export class HearosPageModule { }
