import { Component, AfterViewChecked } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterLinkActive } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { TdMediaService } from '@covalent/core';

import { Observable } from 'rxjs/Observable';

interface Page {
    icon: string;
    name: string;
    link: string;
    description: string;
    disabled?: boolean;
}

@Component({
    selector: 'mp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
    pages: Page[] = [
        { name: 'HOME', link: '/home', description: 'Dashboard', icon: 'home' },
        { name: 'DATA', link: '/data', description: 'Table', icon: 'list' },
        { name: 'WEATHER', link: '/weather', description: 'Forecast', icon: 'cloud' },
        { name: 'ABOUT', link: '/about', description: 'PleimaGarden', icon: 'question_answer' }
    ];

    constructor(public media: TdMediaService, public router: Router,
        private _iconRegistry: MdIconRegistry, private _domSanitizer: DomSanitizer) {
        this._iconRegistry.addSvgIconInNamespace('assets', 'garden',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/image/garden@1x.png')
        );
    }

    ngAfterViewChecked(): void {
        this.media.broadcast();
    }
}
