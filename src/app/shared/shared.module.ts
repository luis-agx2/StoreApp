import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageErrorComponent } from './page-error/page-error.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    PageErrorComponent
  ],
  exports:[
    PageErrorComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
