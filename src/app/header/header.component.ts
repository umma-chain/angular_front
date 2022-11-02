import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    barShow!: boolean;
    languageShow: boolean = false;

    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) { this.featureSelected.emit(feature); }

    ngOnInit() {
    }

    onHide() {
        this.languageShow = !this.languageShow;
    }

    clickEvent() {
       const elNavbar = document.querySelector('.header__nav');
       elNavbar?.classList.toggle('open');   
    }
}
