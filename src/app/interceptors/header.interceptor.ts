import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constants';

export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('reached here');
    const modifiedreq = req.clone({
      headers: req.headers.append(
        Constants.Contenttype,
        Constants.ContenttypeValue
      ),
    });
    return next.handle(req);
  }
}
