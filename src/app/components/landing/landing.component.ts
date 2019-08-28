import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
id:string;
private itemDoc: AngularFirestoreDocument<WebData>;
  item: Observable<any>;

    @ViewChild('home_li') homeLi: ElementRef;
    @ViewChild('servicios_li') serviciosLi: ElementRef;
    @ViewChild('about_li') aboutLi: ElementRef;
    @ViewChild('contact_li') contactLi: ElementRef;
    @ViewChild('portafolio_li') portafolioli: ElementRef;
    @ViewChild('navbar_li') buttonmenu: ElementRef;
    
  constructor(private afs: AngularFirestore,private router: Router, private routes: ActivatedRoute) { 
    this.itemDoc = afs.doc<WebData>('webs/pruebaproductos');
    this.item = this.itemDoc.valueChanges();
  }

  ngOnInit() {
    
    this.routes.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.itemDoc = this.afs.doc<any>(`webs/${this.id}`);
      this.item = this.itemDoc.valueChanges();
      this.item.subscribe((data) => {
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
   this.itemDoc.set(this.data2);
 }

 scrollToElement($element, activeElement: string): void {
  this.buttonmenu.nativeElement.click();
  $element.scrollIntoView({behavior: 'smooth', block: 'start'});
  this.activesToogle(activeElement);
  }

  activesToogle( el: string) {
    switch (el) {
      case 'home':
        this.homeLi.nativeElement.classList.add('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.remove('active');
        this.portafolioli.nativeElement.classList.remove('active');
        break;
      case 'servicios':
        this.homeLi.nativeElement.classList.remove('active');
        this.serviciosLi.nativeElement.classList.add('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.remove('active');
        this.portafolioli.nativeElement.classList.remove('active');
        break;
      case 'about':
        this.homeLi.nativeElement.classList.remove('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.add('active');
        this.contactLi.nativeElement.classList.remove('active');
        this.portafolioli.nativeElement.classList.remove('active');
        break;
      case 'contact':
        this.homeLi.nativeElement.classList.remove('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.add('active');
        this.portafolioli.nativeElement.classList.remove('active');
        break;
        case 'portafolio':
        this.homeLi.nativeElement.classList.remove('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.remove('active');
        this.portafolioli.nativeElement.classList.add('active');
        break;
      default:
        this.homeLi.nativeElement.classList.add('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.remove('active');
        this.portafolioli.nativeElement.classList.remove('active');
        break;
    }
  }
}
