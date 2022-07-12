import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { KirbyModule } from '@kirbydesign/designsystem';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, KirbyModule],
})
export class HomeModule {}
