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
    ],
})
export class AppMaterialModule { }
