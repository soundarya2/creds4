
    import { Component, OnInit } from '@angular/core';

    @Component({
    selector: 'app_menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
    })
    export class MenuComponent implements OnInit {
    menuList = [{"displayName":"Judges","url":"judges"},{"displayName":"Participants","url":"participants"},{"displayName":"Owners","url":"owners"}]
    constructor() { }

    ngOnInit() {
    }

    }

