import { Directive, Renderer2, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[Sticky-Element]'
})

export class StickyElementDirective implements OnInit {
  private initialOffsetFromTop =  0;
  private fixedViewportOffset = 0;
  // tslint:disable-next-line:variable-name
  private observable_data: any;
  private url: boolean;
  navStart: Observable<NavigationStart>;
  @Input() offset: number;
  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private route: ActivatedRoute,
              private router: Router) {
    route.url.subscribe(data => {
      this.observable_data = data;
    });
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
   }

   ngOnInit() {
    //     this.navStart.subscribe(evt => {
    //     evt.url === '/' ? this.url = true : this.url = false;
    //     if (evt.url !== '/') {
    //       this.renderer.removeClass(this.element.nativeElement, 'transparent');
    //    } else {
    //     this.renderer.addClass(this.element.nativeElement, 'transparent');
    //    }
    // });
   }
  @HostListener('window:scroll', ['$event'])
  private handleScroll($event:Event) {
    const currentScroll = $event.srcElement.children[0].scrollTop;
    if (currentScroll > this.offset) {
      this.renderer.addClass(this.element.nativeElement, 'stick');
    } else if (this.offset > currentScroll) {
      this.renderer.removeClass(this.element.nativeElement, 'stick');
    }
  }
}
