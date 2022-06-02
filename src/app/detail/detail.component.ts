import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  public title: string = "";

  constructor(private router: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.title = history.state.title
    console.log(history.state)
  }

}
