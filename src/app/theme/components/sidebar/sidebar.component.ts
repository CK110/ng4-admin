import {Component, Input, OnInit, trigger, state, transition, style, animate, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuItem} from 'primeng/primeng';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

    @Input() model: MenuItem[];

    ngOnInit() {
        this.model = [
            { label: 'Dashboard', icon: 'fa-home', routerLink: ['/pages/dashboard'] },
            { label: 'Curd', icon: 'fa-home', routerLink: ['/pages/curd'] },
            {
                label: 'Individual Projects', icon: 'fa-user-o',
                items: [
                    { label: 'Android', icon: 'fa-android', routerLink: ['/android-project'] },
                    { label: 'Angular 2', icon: 'fa-google', routerLink: ['./angular2-project'] },
                    { label: 'Ionic 2', icon: 'fa-mobile ', routerLink: ['./ionic2-project']},
                    { label: 'LintCode', icon: 'fa-code', routerLink: ['./lintcode-project'] }
                ]
            },
            {
                label: 'Activity', icon: 'fa-desktop',
                items: [
                    { label: 'Android', icon: 'fa-android', routerLink: ['/android'] },
                    { label: 'Angular 2', icon: 'fa-google', routerLink: ['/forms'] },
                    { label: 'Primeng', icon: 'fa-rocket', routerLink: ['/data'] },
                    { label: 'Ionic', icon: 'fa-mobile', routerLink: ['/panels'] },
                    { label: 'Node JS', icon: 'fa-cube', routerLink: ['/overlays'] },
                    { label: 'LintCode', icon: 'fa-code', routerLink: ['/menus'] },
                    { label: 'Apple', icon: 'fa-apple', routerLink: ['/'] },
                    { label: 'Github', icon: 'fa-github ', routerLink: ['/menus'] }

                ]
            },
            {
                label: 'Resources', icon: 'fa-bookmark',
                items: [
                    { label: 'Dribbble', icon: 'fa-dribbble', routerLink: ['/empty'] },
                    { label: 'Mini LinkedIn', icon: 'fa-linkedin ' },
                    { label: 'Todo List', icon: 'fa-list-ol '},
                    { label: 'Ionic Application', icon: 'fa-mobile' },
                    { label: 'Angular 2', icon: 'fa-google' }
                ]
            },
            { label: 'Comments', icon: 'fa-comments', routerLink: ['/comments'] },
            { label: 'Contact Me', icon: 'fa-envelope', routerLink: [''] },
            { label: 'Administrator', icon: 'fa-graduation-cap', routerLink: ['/administrator']  }
        ];
    }
}

@Component({
    selector: '[app-submenu]',
    template: `
       <ul>
            <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
                <li [ngClass]="{'active-menuitem': isActive(i)}">
                    <a [href]="child.url || '#'" (click)="itemClick($event,child,i)">
                        <i class="fa fa-fw" [ngClass]="child.icon"></i>
                        <span>{{child.label}}</span>
                        <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                    </a>
                    <ul app-submenu [item]="child" *ngIf="child.items" [@children]="isActive(i) ? 'visible' : 'hidden'" ></ul>
                </li>
            </ng-template>
        </ul>
    `,
    animations: [
        trigger('children', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ],
    styleUrls: ['sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SubMenuComponent {

    @Input() item: MenuItem[];

    @Input() root: boolean;

    activeIndex: number;

    constructor(private router: Router) { }

    itemClick(event: Event, item: MenuItem, index: number)  {
        this.activeIndex = (this.activeIndex === index) ? null : index;

        event.preventDefault();
        if (item.routerLink) {

            this.router.navigate(item.routerLink);
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }
}
