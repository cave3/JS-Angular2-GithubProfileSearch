import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username = 'cave3';
    private client_id = '7ef54718985141f17358';
    private client_secret = '32fab238904c2c7c5f540520a7029647c0424caf';

    constructor(private _http:Http) {
        console.log('Github Service init ..');

    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos')
            .map(res => res.json());
    }

    updateUsername(username:string) {
        this.username = username;
    }
}