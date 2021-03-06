import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../theme/theme.module';


@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        PagesRoutingModule
    ],
    declarations: [PagesComponent]
})
export class PagesModule { }