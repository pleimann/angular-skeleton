import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Feed, FeedsService } from '../_services';

@Component({
  selector: 'mp-garden-feeds',
  template: `
<md-list *ngFor="let feed of feeds | async">
   <md-list-item>
    <h3 md-line><a [routerLink]="['/feeds', feed.name]"><md-icon>receipt</md-icon>{{ feed.name }}</a></h3>
    <p md-line>Last Value: {{ feed.last_value }}</p>
   </md-list-item>
</md-list>
`,
  providers: [ FeedsService ],
})
export class FeedListComponent implements OnInit {
  public feeds: Observable<Feed[]>;

  constructor(private feedService: FeedsService) {
  }

  ngOnInit() {
    this.feeds = this.feedService.all()
  }
}