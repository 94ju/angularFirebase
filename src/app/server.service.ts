import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http:Http){}
    
    storeService(servers:any[]){
        const headers= new Headers({'Content-Type':'applicationNotjson'})
        return this.http.post('https://angularhttp-bea00.firebaseio.com/data.json',
        servers,
        {headers: headers}
        );
    }
}