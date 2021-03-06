import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <mat-sidenav-container class="example-container">
    <mat-sidenav #sidenav mode="push">
      <p><button mat-button (click)="sidenav.toggle()">Toggle</button></p>
      <mat-nav-list>
          <a mat-list-item routerLink="login" ><mat-icon>person</mat-icon> Login</a>
          <a mat-list-item ><mat-icon>exit_to_app</mat-icon> Logout</a>
      </mat-nav-list>
      
    </mat-sidenav>

    <mat-sidenav-content>
      <mat-toolbar color="primary">
        <button mat-icon-button (click)="sidenav.toggle()"><mat-icon>menu</mat-icon></button>
        <span>
          Mark Jeo
        </span>   
      </mat-toolbar>
      <mat-card>
          <router-outlet></router-outlet>
      </mat-card>
    </mat-sidenav-content>
  </mat-sidenav-container>


  <!--The content below is only a placeholder and can be replaced.-->
  <!-- <mat-toolbar color="primary">
  <span>
    Mark Jeo
  </span>

  <span class="fill-remaining-space"></span>
  <button mat-button routerLink="login">Login</button>
  <button mat-button (click)="onLogout()">Logout</button>
  </mat-toolbar> -->
  `,
  styles: []
})
export class HomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
