import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-contenent-header',
  templateUrl: './main-contenent-header.component.html',
  styleUrls: ['./main-contenent-header.component.scss'],
})
export class MainContenentHeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onTileView() {
    this.router.navigate(['usertiles']);
  }
  onListView() {
    this.router.navigate(['userlist']);
  }
}
