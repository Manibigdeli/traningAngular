import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { DataStorageService } from '../shared/data-storage-shoes.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private datastorage:DataStorageService, private router:Router ,private activeroute:ActivatedRoute) { }
  

  ngOnInit(): void {
  }
 

  OnSaveData(){
    this.datastorage.SaveShoesFirebase();

  }

  FetchingDatas(){
    this.datastorage.FetchingData().subscribe()
  }

  OnLogout(){
    this.router.navigate(['/shop'],{relativeTo:this.activeroute})
  }



}
