import {Component, ElementRef} from 'angular2/core';

@Component({
    selector: 'my-app',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    templateUrl: 'app/app.component.html'

})

export class AppComponent {
    public query = '';

    public selected = [];
    public countries = [
    { id: 1, name: 'Darth Vader' },
    { id: 2, name: 'Kylo Ren' },
    { id: 3, name: 'Rey' },
    { id: 4, name: 'Ahsoka Tano' },
    { id: 5, name: 'Snoke' },
    { id: 6, name: 'Yoda' },
    { id: 7, name: 'Han Solo' },
    { id: 8, name: 'Luke Skywalker' },
    { id: 9, name: 'Obi-Wan Kenobi' },
    { id: 10, name: 'Darth Maul' },
    { id: 11, name: 'Chewbacca' },
    { id: 12, name: 'Boba Fett' },
    { id: 13, name: 'Darth Sidious' },
    { id: 14, name: 'Jabba the Hutt' },
    { id: 15, name: 'Qui-Gon Jinn' },
    { id: 16, name: 'Finn' },
    { id: 17, name: 'General Hux' },
    { id: 18, name: 'Poe Dameron' },
    { id: 19, name: 'Mace Windu'},
    { id: 20, name: 'Jar Jar Binks'}
  ];

    public filteredList = [];
    public elementRef;
    selectedIdx: number;

    constructor(myElement: ElementRef) {
        this.elementRef = myElement;
        this.selectedIdx = -1;
    }

    filter(event: any) {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;

            }.bind(this));
            if (event.code == "ArrowDown" && this.selectedIdx < this.filteredList.length) {
                this.selectedIdx++;
            } else if (event.code == "ArrowUp" && this.selectedIdx > 0) {
                this.selectedIdx--;
            }
        } else {
            this.filteredList = [];
        }
    }

    select(item) {

        this.selected.push(item);
        this.query = "";
        this.filteredList = [];
        this.selectedIdx = -1;
    }


    remove(item){
        this.selected.splice(this.selected.indexOf(item), 1)
    }

    handleBlur() {
        if (this.selectedIdx > -1) {
            this.query = this.filteredList[this.selectedIdx];
        }
        this.filteredList = [];
        this.selectedIdx = -1;
    }

    handleClick(event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
        this.selectedIdx = -1;
    }


}