import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
     isloading = false;
     fetchingmode = true;
     error:string = null
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
    this.authservice.logout();
  }

  OnSaveData(){
    this.datastorage.SaveShoesFirebase();

  }

  fetchingdataload(){
   let Fetchobs$ : Observable<any>;
   this.isloading = true;
   Fetchobs$ = this.datastorage.FetchingData();

   Fetchobs$.subscribe(()=>{
   })
      
    this.isloading = true
    if(this.fetchingmode){
      this.datastorage.FetchingData().subscribe(respons=>{
        this.isloading=false
        this.datastorage.setPending = false;
      },errormessage=>{
        this.error = errormessage 
        console.log(errormessage);
        this.datastorage.setPending = false;
      }
      );
    }
    
    
  }

  OnLogout(){
    this.router.navigate(['/shop'],{relativeTo:this.activeroute})
  }



}
