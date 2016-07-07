System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(myElement) {
                    this.query = '';
<<<<<<< HEAD
                    this.selected = [];
                    this.countries = [
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
                        { id: 19, name: 'Mace Windu' },
                        { id: 20, name: 'Jar Jar Binks' }
                    ];
                    this.filteredList = [];
                    this.elementRef = myElement;
                    this.selectedIdx = -1;
                }
                AppComponent.prototype.filter = function (event) {
                    if (this.query !== "") {
                        this.filteredList = this.countries.filter(function (el) {
                            return el.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                        }.bind(this));
                        if (event.code == "ArrowDown" && this.selectedIdx < this.filteredList.length) {
                            this.selectedIdx++;
                        }
                        else if (event.code == "ArrowUp" && this.selectedIdx > 0) {
                            this.selectedIdx--;
                        }
=======
                    this.countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia & Herzegovina",
                        "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
                        "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein",
                        "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands",
                        "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia",
                        "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
                    this.filteredList = [];
                    this.elementRef = myElement;
                }
                AppComponent.prototype.filter = function () {
                    if (this.query !== "") {
                        this.filteredList = this.countries.filter(function (el) {
                            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                        }.bind(this));
>>>>>>> 61474c790dead394c4624b9e086708e5b444bdb1
                    }
                    else {
                        this.filteredList = [];
                    }
                };
                AppComponent.prototype.select = function (item) {
<<<<<<< HEAD
                    this.selected.push(item);
                    this.query = "";
                    this.filteredList = [];
                    this.selectedIdx = -1;
                };
                AppComponent.prototype.remove = function (item) {
                    this.selected.splice(this.selected.indexOf(item), 1);
                };
                AppComponent.prototype.handleBlur = function () {
                    if (this.selectedIdx > -1) {
                        this.query = this.filteredList[this.selectedIdx];
                    }
                    this.filteredList = [];
                    this.selectedIdx = -1;
=======
                    this.query = item;
                    this.filteredList = [];
>>>>>>> 61474c790dead394c4624b9e086708e5b444bdb1
                };
                AppComponent.prototype.handleClick = function (event) {
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
<<<<<<< HEAD
                    this.selectedIdx = -1;
=======
>>>>>>> 61474c790dead394c4624b9e086708e5b444bdb1
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        host: {
                            '(document:click)': 'handleClick($event)',
                        },
<<<<<<< HEAD
                        templateUrl: 'app/app.component.html'
=======
                        template: "\n        <div class=\"container\" >\n            <div class=\"input-field col s12\">\n              <input id=\"country\" type=\"text\" class=\"validate filter-input\" [(ngModel)]=query (keyup)=filter()>\n              <label for=\"country\">Country</label>\n            </div>\n            <div class=\"suggestions\" *ngIf=\"filteredList.length > 0\">\n                <ul *ngFor=\"#item of filteredList\" >\n                    <li >\n                        <a (click)=\"select(item)\">{{item}}</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    \t"
>>>>>>> 61474c790dead394c4624b9e086708e5b444bdb1
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map