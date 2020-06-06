import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Offer } from 'src/app/global/models/Offer';
import { OfferService } from 'src/app/global/services/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class MyOffersComponent implements OnInit {

  offers: Offer[];

  cols: any[];

  private isLoading = true;

  constructor(private offerServ: OfferService, private router: Router) { }

  ngOnInit() {
      this.offerServ.getAllOffers()
      .then(values => {
          this.offers = Object.values(values);
      })
      .then(() => {
          this.isLoading = false;
          console.log(this.offers);
      })
      .catch(err => {
          console.log(err)
      })

      this.cols = [
          { field: 'name', header: 'Nom du jeu' },
          { field: 'categories', header: 'Style de jeu' },
          { field: 'price', header: "Prix de l'offre" },
          { field: 'date', header: 'Date de mise en lignne' },
          { field: 'delete', header: "Supprimer l'offre" }
      ];
  }

  deleteOffer(id: number) {
    console.log(id);
    this.offerServ.deleteOffer(id);
    setTimeout(() => {
      this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(() =>
      this.router.navigate(['./mon-compte/mes-offres']));
    }, 1000);
  }

  
  public numrows = 10; // Nombre de lignes affichées lors du chargement du dashboard

  public isExpanded:boolean = false;
  public rows:number =10;
  public expandedRows = {};
  public temDataLength:number = 0;

  expandAll() {
    
    if(!this.isExpanded){
      this.offers.forEach(data =>{
        this.expandedRows[data.id] = 1;
      })
    } else {
      this.expandedRows={};
    }
    this.isExpanded = !this.isExpanded;
    console.log(this.expandedRows);
  }
  onRowExpand() {
    console.log("row expanded", Object.keys(this.expandedRows).length);
    if(Object.keys(this.expandedRows).length === this.temDataLength){
      this.isExpanded = true;
    }
    console.log(this.expandedRows);
  }
  onRowCollapse() {
    console.log("row collapsed",Object.keys(this.expandedRows).length);
    if(Object.keys(this.expandedRows).length === 0){
      this.isExpanded = false;
    }
  }
  onPage(event: any) {
    this.temDataLength = this.offers.slice(event.first, event.first + 10).length;
    console.log(this.temDataLength);
    this.isExpanded = false;
    this.expandedRows={};
  }

}
