import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

import { CovalentCoreModule } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

@NgModule({
    imports: [
        BrowserAnimationsModule,
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
        CovalentCoreModule,
        CovalentHttpModule.forRoot(),
        CovalentHighlightModule,
        CovalentMarkdownModule,
        CovalentDynamicFormsModule,
    ],
    exports: [
        BrowserAnimationsModule,
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
        CovalentCoreModule,
        CovalentHttpModule,
        CovalentHighlightModule,
        CovalentMarkdownModule,
        CovalentDynamicFormsModule,
    ],
})
export class AppMaterialModule { }
