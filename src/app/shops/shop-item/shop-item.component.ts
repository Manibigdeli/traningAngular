import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ShoesModel } from "../shoes.model";

@Component({
  selector: "app-shop-item",
  templateUrl: "./shop-item.component.html",
  styleUrls: ["./shop-item.component.css"],
})
export class ShopItemComponent implements OnInit {
  @Input() shoes: ShoesModel;
  @Input() id: number;
  currentId;
  constructor(public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentId =
      this.router.url.split("?")[0][this.router.url.split("?")[0].length - 1];
  }

  onShoeClick(shoe) {
    this.router.navigate(["shop", this.id], {
      queryParams: {
        name: this.shoes.name,
      },
    });
  }
}
