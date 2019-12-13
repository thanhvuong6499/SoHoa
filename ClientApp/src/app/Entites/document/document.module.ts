import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document.component';
import { WritingComponent } from './writing/writing.component';

@NgModule({
  declarations: [
    WritingComponent,
    DocumentComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DocumentModule { }
