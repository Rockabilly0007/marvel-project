import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private http: HttpClient) { }

  baseURL = 'https://gateway.marvel.com:443/v1/public/characters?limit=10&apikey=2009c3d37f4287fe5375268332564122&ts=1&hash=03854bc43cdad8914be987c57421bf37';

  getAllCharacters():Observable<any> {
    return this.http.get(this.baseURL);
  }

  getAllComics():Observable<any> {
    const seriesUrl ='https://gateway.marvel.com:443/v1/public/comics?limit=10&ts=1&apikey=2009c3d37f4287fe5375268332564122&hash=03854bc43cdad8914be987c57421bf37';
    return this.http.get(seriesUrl);
  }

  getAllSeries():Observable<any> {
    const seriesUrl ='https://gateway.marvel.com:443/v1/public/series?limit=10&ts=1&apikey=2009c3d37f4287fe5375268332564122&hash=03854bc43cdad8914be987c57421bf37';
    return this.http.get(seriesUrl);
  }

  getComicsByCharacter(charId: number):Observable<any> {
    const comicByCharUrl = `https://gateway.marvel.com:443/v1/public/characters/${charId}/comics?apikey=2009c3d37f4287fe5375268332564122&ts=1&hash=03854bc43cdad8914be987c57421bf37`;
    return this.http.get(comicByCharUrl);
  }

  getSeriesByCharacter(charId: number):Observable<any> {
    const seriesByCharUrl = `https://gateway.marvel.com:443/v1/public/characters/${charId}/series?apikey=2009c3d37f4287fe5375268332564122&ts=1&hash=03854bc43cdad8914be987c57421bf37`;
    return this.http.get(seriesByCharUrl);
  }

  getCharByName(charName: string):Observable<any> {
    const charNameByUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${charName}&apikey=2009c3d37f4287fe5375268332564122&ts=1&hash=03854bc43cdad8914be987c57421bf37`;
    return this.http.get(charNameByUrl);
  }
}
