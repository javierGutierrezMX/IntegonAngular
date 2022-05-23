import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallePersona',
  templateUrl: './detallePersona.component.html',
  styleUrls: ['./detallePersona.component.css']
})
export class DetallePersonaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  clavePersona: number = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clavePersona = params['num']
    })
  }

}
