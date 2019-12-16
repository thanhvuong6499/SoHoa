import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserModule} from './user/user.module';
import { StockComponent } from './stock/stock.component';
import { FontComponent } from './font/font.component';
import { CategoryOfFileComponent } from './category-of-file/category-of-file.component';
import { BoxIndexComponent } from './box-index/box-index.component';
import { DocumentComponent } from './document/document.component';
import { DocumentModule } from './document/document.module';
import { AdministrativeUnitsComponent } from './administrative-units/administrative-units.component';



@NgModule({
  declarations: [
  StockComponent,
  FontComponent,
  CategoryOfFileComponent,
  BoxIndexComponent,
  AdministrativeUnitsComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    DocumentModule
  ]
})
export class EntityModule { }
