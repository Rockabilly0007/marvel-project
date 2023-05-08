import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../service/marvel-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

    constructor(private marvelService: MarvelApiService) {}

    showSearchResult = false;
    characters: any = [];
    comics: any = [];
    series: any = [];
    showComicsDiv = false;
    showSeriesDiv = false;
    charName: string = '';
    searchedChar: any = [];
    showLoading = false;


    ngOnInit(): void {
        this.marvelService.getAllCharacters()
        .subscribe(response => {
            console.log(response);
            this.characters = response.data.results;
            this.showLoading = true;
        })
    }

    fetchComicsByChar(charId:number) {
        console.log(charId);
        this.marvelService.getComicsByCharacter(charId).subscribe((response) => {
            if(response.data.count > 0) {
                this.comics = response.data.results;
                this.showComicsDiv = true;
                this.showLoading = true;
            }
        })
    }

    fetchSeriesByChar(charId: number) {
        console.log(charId);
        this.marvelService.getSeriesByCharacter(charId).subscribe((response) => {
            if(response.data.count > 0) {
                this.series = response.data.results;
                this.showSeriesDiv = true;
                this.showLoading = true;
            }
        })
    }

    findChar(event: any) {
        this.charName = event.target.value;
        console.log(this.charName);
        this.marvelService.getCharByName(this.charName).subscribe(response => {
            console.log(response);
            if(response.data.count > 0) {
                this.showSearchResult = true;
                this.searchedChar = response.data.results;
            } else {
                this.ngOnInit();
            }
        })
    }

}
