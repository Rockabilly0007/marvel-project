import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../service/marvel-api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

    series: any = [];

    constructor(private marvelService: MarvelApiService) { }

    ngOnInit() {
        
        this.marvelService.getAllSeries().subscribe((response)=>{
            console.log(response);
            this.series = response.data.results;
        })
    }
    
}
