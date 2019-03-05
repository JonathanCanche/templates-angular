import { Component, OnInit } from '@angular/core';
import { WebData } from 'src/app/interface';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
data: WebData;
data2: WebData;
show = false;
private itemDoc: AngularFirestoreDocument<WebData>;
  item: Observable<any>;
  constructor(private afs: AngularFirestore,private router: Router, private routes: ActivatedRoute) { 
    this.itemDoc = afs.doc<WebData>('webs/pruebaproductos');
    this.item = this.itemDoc.valueChanges();
  }

  ngOnInit() {
    
    this.routes.paramMap.subscribe(params => {
      const id = params.get('id');
      this.itemDoc = this.afs.doc<any>(`webs/${id}`);
      this.item = this.itemDoc.valueChanges();
      this.item.subscribe((data) => {
        console.log('data', data);
        if (data === undefined || data.tipo != 2) {
          this.router.navigateByUrl('/404');
        } else {
         this.data = data;
        this.show = true;
        }
      });
    });
  }

  
 cargadatos(){
   this.data2= this.data;
   console.log(this.data2);
   this.itemDoc.set(this.data2);
 }

 scrollToElement($element): void {
    $element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
