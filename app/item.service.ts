import { Injectable } from 'node_modules/angular2/core';
//import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

const URL_ITEM = 'app/items.json';

@Injectable()
export class ItemService {

	constructor(private _http: Http){ }

	getCustomers(){
		return this._http.get(URL_ITEM)
			.map((response:Response) => response.json())
			.toPromise()
			.catch((err: any) =>{
				console.log(err) 
				return Promise.reject(err);
			});
	}


	getCustomers_RxObservable(){
		return this._http.get(URL_CUSTOMER)
			.map((response:Response) => response.json())
			.catch(this. _handlerError);
	}

	_handlerError(err:any){
		console.log(err);  //logs for devs
		return Observable.throw(err);  //can customize err here
	}
}