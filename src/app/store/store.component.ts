import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from '../models/models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public sort: string;
  public games: Array<Game>;
  private routeSub!: Subscription;
  private gameSub!: Subscription;

  constructor(    
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {  this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
    if (params['game-search']) {
      this.searchGames('metacrit', params['game-search']);
    console.log('games',this.games)

    } else {
      this.searchGames('metacrit');
    console.log('games', this.games)

    }
  }); }

  searchGames(sort: string, search?: string): void {
    this.gameSub = this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log('inside func', this.games)
      });
      console.log('gamesSub', this.gameSub);
      console.log('outside fun', this.games);

  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }
  log() { 
    for(var i=0; i < 20; i++){
    console.log('adzkhdkh',this.games[i].parent_platforms);
  }}
  ngOnDestroy(): void {

    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
