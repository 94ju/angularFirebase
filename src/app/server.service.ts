import { Injectable } from '@angular/core';
import { Headers,Http ,Response} from '@angular/http';

import { map } from 'rxjs/operators';

@Injectable()
export class ServerService {
    constructor(private http:Http){}
    
    storeService(servers:any[]){
        const headers= new Headers({'Content-Type':'applicationNotjson'})
        // return this.http.post('https://angularhttp-bea00.firebaseio.com/data.json',
        // servers,
        // {headers: headers}
        // );
        return this.http.put('https://angularhttp-bea00.firebaseio.com/data.json',
        servers,
        {headers: headers}
        );
    }
    getServers(){
        return this.http.get('https://angularhttp-bea00.firebaseio.com/data.json').pipe(
            map(
                (response:Response)=> {
                    const data =response.json();
                    return data;
                }
            )
        )
    }
}