import {NgModule, Directive, ElementRef, OnDestroy, HostBinding, HostListener, Input, DoCheck} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DomHandler} from 'primeng/primeng';

@Directive({
  selector: '[pTooltip]',
  providers: [DomHandler]
})
export class TooltipDirective implements OnDestroy {

  @Input('pTooltip') text: string;

  @Input() tooltipPosition = 'right';

  @Input() tooltipEvent = 'hover';

  @Input() appendTo: any = 'body';

  @Input() positionStyle: string;

  @Input() tooltipStyleClass: string;

  @Input('tooltipDisabled') disabled: boolean;

  @Input() escape = true;

  container: any;

  @Input() hasError: boolean;

  constructor(public el: ElementRef, public domHandler: DomHandler) {}

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(e: Event) {
      this.show();
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e: Event) {
      this.hide();
  }

  @HostListener('focusin', ['$event'])
  onFocusIn(e: Event) {
    this.show();
  }

  @HostListener('focusout', ['$event'])
  onFocusOut(e: Event) {
    this.hide();
  }

  @HostListener('keyup', ['$event'])
  onKeyup() {
    if (this.hasError) {
      this.show();

    }else {
      this.hide();
    }
  }

  show() {
    if (!this.text || this.disabled) {
      return;
    }

    /** 如果存在则不新建，只需要修改里面的内容 **/
    if (!this.container) {
      this.create();
    }else {
      this.domHandler.findSingle(this.container, '.ui-tooltip-text').innerText = this.text;
    }
    const offset = (this.appendTo !== 'body') ? {left: 0, top: 0} : this.domHandler.getOffset(this.el.nativeElement);
    const targetTop = offset.top;
    const targetLeft = offset.left;
    let left: number;
    let top: number;

    this.container.style.display = 'block';

    switch (this.tooltipPosition) {
      case 'right':
        left = targetLeft + this.domHandler.getOuterWidth(this.el.nativeElement);
        top = targetTop + (this.domHandler.getOuterHeight(this.el.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
        break;

      case 'left':
        left = targetLeft - this.domHandler.getOuterWidth(this.container);
        top = targetTop + (this.domHandler.getOuterHeight(this.el.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
        break;

      case 'top':
        left = targetLeft + (this.domHandler.getOuterWidth(this.el.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
        top = targetTop - this.domHandler.getOuterHeight(this.container);
        break;

      case 'bottom':
        left = targetLeft + (this.domHandler.getOuterWidth(this.el.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
        top = targetTop + this.domHandler.getOuterHeight(this.el.nativeElement);
        break;
    }

    this.container.style.left = left + 'px';
    this.container.style.top = top + 'px';

      // this.domHandler.fadeIn(this.container, 250);

    this.container.style.zIndex = ++DomHandler.zindex;
  }

  hide() {
    this.ngOnDestroy();
  }

  create() {
    let styleClass = 'ui-widget ui-tooltip ui-tooltip-' + this.tooltipPosition;
    this.container = document.createElement('div');
    if (this.tooltipStyleClass) {
      styleClass += ' ' + this.tooltipStyleClass;
    }

    this.container.className = styleClass;

    const tooltipArrow = document.createElement('div');
    tooltipArrow.className = 'ui-tooltip-arrow';
    this.container.appendChild(tooltipArrow);

    const tooltipText = document.createElement('div');
    tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';

    if (this.escape)
      tooltipText.appendChild(document.createTextNode(this.text));
    else
      tooltipText.innerHTML = this.text;

    if (this.positionStyle) {
      this.container.style.position = this.positionStyle;
    }

    this.container.appendChild(tooltipText);

    if (this.appendTo === 'body')
      document.body.appendChild(this.container);
    else if (this.appendTo === 'target')
      this.domHandler.appendChild(this.container, this.el.nativeElement);
    else
      this.domHandler.appendChild(this.container, this.appendTo);

  }

  ngOnDestroy() {
    if (this.container && this.container.parentElement) {
      if (this.appendTo === 'body')
        document.body.removeChild(this.container);
      else if (this.appendTo === 'target')
        this.el.nativeElement.removeChild(this.container);
      else
        this.domHandler.removeChild(this.container, this.appendTo);
    }
    this.container = null;
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [TooltipDirective],
  declarations: [TooltipDirective]
})
export class TooltipModule { }
