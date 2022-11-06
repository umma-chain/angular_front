import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    barShow!: boolean;
    languageShow: boolean = false;

    @ViewChild('langButton') 
    btn?: ElementRef;    
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) { this.featureSelected.emit(feature); }

    constructor() { }

    ngOnInit() {
    }

    isFocusInsideComponent = false;
    isComponentClicked = false;
    

    @HostListener('document:click', ['$event.target'])
    onClickDocument(event:any) {
        if (!this.btn?.nativeElement.contains(event)){
            this.isComponentClicked = false
        }
        
        if(!this.btn) {
            this.isComponentClicked = false;
        }
    }
    clickout() {
        this.isComponentClicked = !this.isComponentClicked;
    }

    onHide() {
        this.languageShow = !this.languageShow;
    }

    clickEvent() {
       const elNavbar = document.querySelector('.header__nav');
       elNavbar?.classList.toggle('open');   
    }
}
