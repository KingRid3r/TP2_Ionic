import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { monnaiePage } from './monnaie';

@NgModule({
  declarations: [
    monnaiePage,
  ],
  imports: [
    IonicPageModule.forChild(monnaiePage),
  ],
})
export class MonnaiePageModule {}
