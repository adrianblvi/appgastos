import { Component, OnInit } from '@angular/core';
import { SpendigsService } from "./../spendigs.service";
import { Spending, Category } from "./../spending.model";

@Component({
  selector: 'app-spending-home',
  templateUrl: './spending-home.component.html',
  styleUrls: ['./spending-home.component.scss']
})
export class SpendingHomeComponent implements OnInit {

  spending: Spending;
  category: Category[];

  constructor(private spendingService: SpendigsService) { }

  ngOnInit() {
    this.spending = this.spendingService.newSpending();
    this.category = this.spendingService.getCategorias();
  }

  newSpending(): void {
    this.spendingService.addSpending(this.spending);
    this.spending = this.spendingService.newSpending();
  }
}
