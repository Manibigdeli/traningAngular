import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage-shoes.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private datastorage:DataStorageService) { }
  

  ngOnInit(): void {
  }
 

  OnSaveData(){
    this.datastorage.SaveShoesFirebase();

  }

  FetchingDatas(){
    this.datastorage.FetchingData().subscribe()
  }



}
