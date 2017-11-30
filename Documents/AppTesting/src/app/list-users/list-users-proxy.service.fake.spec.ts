import 'rxjs/add/observable/of';
import { LIST_USERS_FAKE } from './list-users.fake.spec';
import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


export class ListUsersProxyServiceFake {
  
  getUsers(): Observable<Response> {
    const responseOptions: ResponseOptions = new ResponseOptions({
      body: LIST_USERS_FAKE
    });
    const response: Response = new Response(responseOptions);
    return Observable.of(response);
  }

}