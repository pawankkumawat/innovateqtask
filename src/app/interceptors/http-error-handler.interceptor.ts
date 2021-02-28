import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ErrorMessages, RouteStrings } from 'src/app/constants/constants';
@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {

    constructor(private router: Router) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const req = request.clone();
        // req.headers.append('Feature - Policy', 'camera "self"');

        return next.handle(req)
            .pipe(
                // retry(1),ks
                catchError((error: any) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `${error.error.message}`;
                    } else {
                        // server-side error
                        let errMsg = error.message;
                        if (error.error) {
                            errMsg = error.error;
                        }
                        if (error.status === 504) {
                            errMsg = ErrorMessages.ContactAdmin;
                        }
                        errorMessage = `${errMsg}`;

                    }
                    if (error.status === 403) {
                        // handle 403 code;
                    }
                    if (error.status === 401) {
                        // handle code here
                    }

                    return throwError({ status: error.status, message: errorMessage });
                })
            );
    }
}
