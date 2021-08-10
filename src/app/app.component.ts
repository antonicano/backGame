import { Component, OnInit } from '@angular/core';
import { UnitsService } from './services/units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ogame';

  constructor(
    private unitService:UnitsService
  ){}

  ngOnInit(){
    this.getUnits();
  }

  getUnits(){
   this.unitService.getUnits().subscribe(data => {
     console.log(data);
   })
  }

}
