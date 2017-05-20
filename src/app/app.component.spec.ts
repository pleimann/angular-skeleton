import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MdToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                AppMaterialModule
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));
});
