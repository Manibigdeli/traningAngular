import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage-shoes.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
     User : Subscription;
     Authenticated = false;
     constructor(private datastorage:DataStorageService,
     private router:Router ,private activeroute:ActivatedRoute,
     private authservice:AuthService ) { }
  

  ngOnInit(): void {
  this.User =  this.authservice.user.subscribe(user=>{
    this.Authenticated = !!user
    })
  }

  ngOnDestroy(): void {
    this.User.unsubscribe();
  }
  OnLogOut(){
    this.router.navigate(['/auth']);
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
