import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer, ViewChild} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements AfterViewInit, OnDestroy {

  public menuInactiveDesktop: boolean; // PC

  public menuActiveMobile: boolean; // 手机

  public topMenuActive: boolean;

  public topMenuLeaving: boolean;

  @ViewChild('scroller') public scrollerViewChild: ElementRef;

  public scroller: HTMLDivElement;

  documentClickListener: Function;

  menuClick: boolean;

  topMenuButtonClick: boolean;

  constructor(public renderer: Renderer) { }

  ngAfterViewInit() {
    // menu 滚动条
    this.scroller = <HTMLDivElement>this.scrollerViewChild.nativeElement;
    // 点击内容区域，隐藏menu
    this.documentClickListener = this.renderer.listenGlobal('body', 'click', (event) => {
      if (!this.isDesktop()) {
        if (!this.menuClick) {
          this.menuActiveMobile = false;
        }

        if (!this.topMenuButtonClick) {
          this.hideTopMenu();
        }

        this.menuClick = false;
        this.topMenuButtonClick = false;
      }
    });
  }

  toggleMenu(event: Event) {
    this.menuClick = true;
    if (this.isDesktop()) {
      this.menuInactiveDesktop = !this.menuInactiveDesktop;
      if (this.menuInactiveDesktop) {
        this.menuActiveMobile = false;
      }
    }
    else {
      this.menuActiveMobile = !this.menuActiveMobile;
      if (this.menuActiveMobile) {
        this.menuInactiveDesktop = false;
      }
    }

    if (this.topMenuActive) {
      this.hideTopMenu();
    }

    event.preventDefault();
  }

  toggleTopMenu(event: Event) {
    this.topMenuButtonClick = true;
    this.menuActiveMobile = false;

    if (this.topMenuActive) {
      this.hideTopMenu();
    }
    else {
      this.topMenuActive = true;
    }

    event.preventDefault();
  }

  onMenuClick() {
    this.menuClick = true;

    // setTimeout(() => {
    //   jQuery(this.scroller).nanoScroller();
    // }, 600);
  }

  hideTopMenu() {
    this.topMenuLeaving = true;
    setTimeout(() => {
      this.topMenuActive = false;
      this.topMenuLeaving = false;
    }, 500);
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  ngOnDestroy() {
    if (this.documentClickListener) {
      this.documentClickListener();
    }
  }
}
