import { Component, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdSnackBar, MdDialogRef, MdTabChangeEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';
interface Page {
    name: string;
    link: string;
    disabled?: boolean;
}

@Component({
    selector: 'mp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    toolbarColor = 'primary';
    pages: Page[] = [
        {
            name: 'HOME',
            link: '/home'
        }, {
            name: 'DATA',
            link: '/data'
        }, {
            name: 'WEATHER',
            link: '/weather'
        }, {
            name: 'ABOUT',
            link: '/about'
        }
    ];

    constructor(private router: Router) { }

    // TOOD fix this to unsubscribe or refactor
    selectTab(event: MdTabChangeEvent) {
        // this.pages.map((pages: Page[]) => pages.filter((p, index) => index === event.index)[0])
        //     .subscribe((page: Page) => this.router.navigateByUrl(page.link));
    }
}
