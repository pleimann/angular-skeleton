import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdToolbarModule,
    MdGridListModule,
    MdTabsModule,
    MdDialogModule,
    MdProgressBarModule,
    MdSnackBarModule
} from '@angular/material';

import { CovalentLayoutModule, CovalentMediaModule } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { LineChartModule, GaugeModule } from '@swimlane/ngx-charts';

import 'hammerjs';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        CovalentLayoutModule,
        CovalentMediaModule,
        CovalentHttpModule.forRoot(),
        CovalentHighlightModule,
        CovalentMarkdownModule,
        CovalentDynamicFormsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdSidenavModule,
        MdCardModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdToolbarModule,
        MdGridListModule,
        MdTabsModule,
        MdDialogModule,
        MdProgressBarModule,
        MdSnackBarModule,
        LineChartModule,
        GaugeModule,
    ],
    exports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        CovalentLayoutModule,
        CovalentMediaModule,
        CovalentHttpModule,
        CovalentHighlightModule,
        CovalentMarkdownModule,
        CovalentDynamicFormsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdSidenavModule,
        MdCardModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdToolbarModule,
        MdGridListModule,
        MdTabsModule,
        MdDialogModule,
        MdProgressBarModule,
        MdSnackBarModule,
        LineChartModule,
        GaugeModule,
    ],
})
export class AppMaterialModule { }
