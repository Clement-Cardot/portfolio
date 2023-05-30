import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectPageComponent } from './project-page/project-page.component';



@NgModule({
  declarations: [
    ProjectCardComponent,
    ProjectPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
