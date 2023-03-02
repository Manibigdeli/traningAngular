import { Component } from "@angular/core";
import { DataStorageService } from "../data-storage-shoes.service";

@Component({
    selector:'app-loading-spinner',
    template:'<span *ngIf="dataStorageServ.isPending | async " class="loader"></span>',
    styleUrls:['./loading-spinner.css']
})
export class LoadingSpinner{

    constructor(public dataStorageServ:DataStorageService){
    }

}

