import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { createSelector ,createFeatureSelector} from '@ngrx/store';
import { IDiscount, IHeadState, IAppState } from '../../../shared/variables';
// import { IAppState } from '../head.variables';
import { state } from '@angular/animations';
import { select } from '@ngrx/store';
import { DialogComponent } from "../../../shared/dialog/dialog/dialog.component";
import {LocationTreeComponent} from "./location-tree/location-tree.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {


  discounts$: Observable<IDiscount[]>;


  constructor( private store: Store<IAppState>,
               public dialog: MatDialog) {
    this.discounts$ = this.store.pipe(select( state => state.head.discounts));
  }

  openDialog() {
    let dialogConfig = {
      data: {
        title: 'Title for tree location',
        component: LocationTreeComponent,
      },
      width: '500px',
      height: '300px'
    }
    this.dialog.open( DialogComponent, dialogConfig );
  }

  ngOnInit(): void {

    console.log(this.discounts$);
  }

  discountSearch = new FormControl('');
  profileMenu = new FormControl('');
  profileMenuItems = [
    'Select cathegory',
    'History',
    'Favorit',
    'Active discounts',
    'Logout',
    'Close',
  ];

  tabItems = [
    { link: 'home', label: 'Home' },
    { link: 'profile', label: 'Profile' },
    { link: 'vendor', label: 'Vendor' },
    { link: 'statistic', label: 'Statistic' }
  ];

  pmClick(ev: Event) {
    console.log((ev.target as HTMLButtonElement).innerText);
  }
}