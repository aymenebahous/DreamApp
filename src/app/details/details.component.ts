import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  detailsDisplayed = false;
  clicks : number[] = [];

  displayDetails(): void {
    this.detailsDisplayed = !this.detailsDisplayed;
    this.clicks.push(this.clicks.length + 1);
  }
}
