import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {IPlayer} from './Player';
import { PlayerService } from './Players.service';

@Component({
    templateUrl: './players-list.component.html'
})

export class PlayersListComponent implements OnInit {
    playersTitle: string = 'Players List';
    imageWidth = 200;
    imageMargin = 2;
    showImage = false;
    errorMessage : string;
    _playersFilter : string;
    get playersFilter() : string
    {
        return this._playersFilter;
    }
    set playersFilter(value : string) 
    {
        this._playersFilter = value;
        this.filteredPlayers = this.playersFilter ? this.performFilter(this.playersFilter) : this.players;
    }

    constructor(private playerService : PlayerService)
    {
        console.log('In constructor');
    }

    filteredPlayers: IPlayer[];

    players: IPlayer[] = [];
    onShowImage() : void
    {
        this.showImage = !this.showImage;
    }

    ngOnInit() : void
    {
        console.log('In OnInit method');
        this.playerService.getPlayers().subscribe({
            next: playersResponse => 
            {
                this.players = playersResponse;
                this.filteredPlayers = this.players;
            },
            error: err => this.errorMessage = err
        });
    }

    

    performFilter(filterText: string) : IPlayer[]
    {
        filterText = filterText.toLocaleLowerCase();
        return this.players.filter((player: IPlayer) =>
            player.name.toLocaleLowerCase().indexOf(filterText) !== -1);
    }

    OnSelectedByPercentageChanges(passedinText: string) : void
    {
        this.playersTitle = passedinText;
    }
}