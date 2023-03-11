import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage-shoes.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';





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
     isload = false;
     changeroute = false;
     listOfPosition: NzPlacementType[] = ['topCenter'];z

     constructor(private datastorage:DataStorageService,
     private router:Router ,private activeroute:ActivatedRoute,
     private authservice:AuthService,private notification :NzNotificationService ) { }
  

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
    this.notification.blank('success','Logout').onClick.subscribe(res=>{
      console.log(res)
    })

  }

  OnSaveData(){
    this.datastorage.SaveShoesFirebase();

  }
  
  fetchingdataload(){
    this.isload = true
   let Fetchobs$ : Observable<any>;
   this.isloading = true;
   Fetchobs$ = this.datastorage.FetchingData();

   Fetchobs$.subscribe(()=>{
    this.isload = false
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
