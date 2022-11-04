import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sort!: String;
  public games!: Array<Game>;

  constructor(
    private httpservice:HttpService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { 
    

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      if(params['game-search']){
        this.searchGames('metacrit',params['game-search'])
      }else{
        this.searchGames('metacrit')
      }
    })
  }

  searchGames(sort:String, search?: string):void{
    this.httpservice
    .getGameList(sort.toString(), search)
    .subscribe((gameList:APIResponse<Game>)=>{
      this.games=gameList.results
      console.log(gameList)
    })
  }

}
