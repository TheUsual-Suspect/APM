import { Injectable } from '@angular/core';
import { IPlayer } from './Player';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PlayerService
{
    private fplPlayersUrl = 'api/products/fplPlayers.json';
    constructor(private http: HttpClient)
    {

    }

    getPlayers() : Observable<IPlayer[]>
    {
        return this.http.get<IPlayer[]>(this.fplPlayersUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = 'An error occured';
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}