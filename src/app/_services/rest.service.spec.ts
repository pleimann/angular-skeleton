import { ReflectiveInjector } from '@angular/core';
import { TestBed, fakeAsync, tick, inject, async } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
    ConnectionBackend, BaseRequestOptions, RequestOptions,
    Http, ResponseOptions, Response, Headers, HttpModule, XHRBackend
} from '@angular/http';

import 'rxjs/add/operator/single';

import { RestService } from './rest.service';
import { Skeleton } from 'app/_model';

describe('RestService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                { provide: XHRBackend, useClass: MockBackend },
                RestService,
            ]
        });
    });

    it('should construct', async(inject([RestService], (service: RestService) => {
        expect(service).toBeDefined();
    })));

    describe('getMethod', () => {
        const responseOptions: ResponseInit = {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        it('should parse response', inject([RestService, XHRBackend],
            (service: RestService, mockBackend) => {
                mockBackend.connections.single().subscribe((connection: MockConnection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: { color: 'blue' },
                        ...responseOptions
                    })));
                });

                service.get('').subscribe(response => {
                    expect(response).toEqual(jasmine.objectContaining({
                        color: 'red'
                    }));
                });
            }
        ));

        it('should handle not found response', inject([RestService, XHRBackend],
            (service: RestService, mockBackend) => {
                mockBackend.connections.single().subscribe((connection: MockConnection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: '',
                        ...responseOptions
                    })));
                });

                service.get('').subscribe(console.debug);
            }
        ));

        it('should throw error', inject([RestService, XHRBackend],
            (service: RestService, mockBackend) => {
                mockBackend.connections.single().subscribe((connection: MockConnection) => {
                    connection.mockError(new Error());
                });
            }
        ));
    });
});
