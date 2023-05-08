import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../service/marvel-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  constructor(private marvelService: MarvelApiService) { }

  comics: any = [];

  ngOnInit(): void {

    this.marvelService.getAllComics().subscribe((response: any) => {
      console.log(response);
      this.comics = response.data.results;
    })

  }

}