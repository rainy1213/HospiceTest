import { Component, OnInit } from '@angular/core';
import { UserPreferenceService } from '../services/userpreference.service';
import { UserPreference } from '../shared/models/userpreference.model';

@Component({
  selector: 'app-colorpreference',
  templateUrl: './colorpreference.component.html',
  styleUrls: ['./colorpreference.component.scss']
})
export class ColorpreferenceComponent implements OnInit {

  constructor(private userpreferenceService: UserPreferenceService) {
    
   }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '>=60'];
  public barChartType = 'bar';
  public barChartLegend = true;
  red10=0;
  red20=0;
  red30=0;
  red40=0;
  red50=0;
  red60=0;
  redgreater60=0;

  blue10=0;
  blue20=0;
  blue30=0;
  blue40=0;
  blue50=0;
  blue60=0;
  bluegreater60=0;

  yellow10=0;
  yellow20=0;
  yellow30=0;
  yellow40=0;
  yellow50=0;
  yellow60=0;
  yellowgreater60=0;

  
  

  public barChartData = [
    {data: [0, 0, 0, 0, 0, 0, 0], label: 'red'},
    {data: [0, 0, 0, 0, 0, 0, 0], label: 'blue'},
    {data: [0, 0, 0, 0, 0, 0, 0], label: 'yellow'}
  ];

  userpreference = new UserPreference();
  userpreferences: UserPreference[] = [];
  isLoading = true;

  getUserPreferences() {
    this.userpreferenceService.getUserPreferences().subscribe(
      data => {
        this.userpreferences = data;
        this.red10 = this.userpreferences.filter(
          a => a.colorpreference === 'red' && a.age<10).length;
        this.red20 = this.userpreferences.filter(
            a => a.colorpreference === 'red' && a.age>=10 && a.age<20).length;
        this.red30 = this.userpreferences.filter(
            a => a.colorpreference === 'red' && a.age>=20 && a.age<30).length;
        this.red40 = this.userpreferences.filter(
            a => a.colorpreference === 'red' && a.age>=30 && a.age<40).length;
        this.red50 = this.userpreferences.filter(
            a => a.colorpreference === 'red' && a.age>=40 && a.age<50).length;
        this.red60 = this.userpreferences.filter(
            a => a.colorpreference === 'red' && a.age>=50 && a.age<60 ).length;
        this.redgreater60 = this.userpreferences.filter(
            a => a.colorpreference === 'red' && a.age>=60).length;

        this.blue10 = this.userpreferences.filter(
            a => a.colorpreference === 'blue' && a.age<10).length;
        this.blue20 = this.userpreferences.filter(
            a => a.colorpreference === 'blue' && a.age>=10 && a.age<20).length;
        this.blue30 = this.userpreferences.filter(
            a => a.colorpreference === 'blue' && a.age>=20 && a.age<30).length;
        this.blue40 = this.userpreferences.filter(
            a => a.colorpreference === 'blue' && a.age>=30 && a.age<40).length;
        this.blue50 = this.userpreferences.filter(
            a => a.colorpreference === 'blue' && a.age>=40 && a.age<50).length;
        this.blue60 = this.userpreferences.filter(
            a => a.colorpreference === 'blue' && a.age>=50 && a.age<60 ).length;
        this.bluegreater60 = this.userpreferences.filter(
            a => a.colorpreference === 'blue' && a.age>=60).length;

        this.yellow10 = this.userpreferences.filter(
            a => a.colorpreference === 'yellow' && a.age<10).length;
        this.yellow20 = this.userpreferences.filter(
            a => a.colorpreference === 'yellow' && a.age>=10 && a.age<20).length;
        this.yellow30 = this.userpreferences.filter(
            a => a.colorpreference === 'yellow' && a.age>=20 && a.age<30).length;
        this.yellow40 = this.userpreferences.filter(
            a => a.colorpreference === 'yellow' && a.age>=30 && a.age<40).length;
        this.yellow50 = this.userpreferences.filter(
            a => a.colorpreference === 'yellow' && a.age>=40 && a.age<50).length;
        this.yellow60 = this.userpreferences.filter(
            a => a.colorpreference === 'yellow' && a.age>=50 && a.age<60 ).length;
        this.yellowgreater60 = this.userpreferences.filter(
            a => a.colorpreference === 'yellow' && a.age>=60).length;
 
        this.barChartData=[
          {data: [this.red10, this.red20, this.red30, this.red40, this.red50, this.red60, this.redgreater60], label: 'red'},
          {data: [this.blue10, this.blue20, this.blue30, this.blue40, this.blue50, this.blue60, this.bluegreater60], label: 'blue'},
          {data: [this.yellow10, this.yellow20, this.yellow30, this.yellow40, this.yellow50, this.yellow60, this.yellowgreater60], label: 'yellow'}
        ];
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  ngOnInit() {
    this.getUserPreferences();
    
  }

}
