import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { TokenStorageService } from "../service/token-storage.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenStorageService, private router: Router){ }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authRequest = req;
        const token = this.tokenService.getToken();
        if(token != null) {
            req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, `Bearer ` + token) })
        } 
        return next.handle(req).pipe(
           catchError((error: HttpErrorResponse) => {
                console.log(error)
                if(error.status === 401) {
                    this.tokenService.removeToken();
                    this.router.navigateByUrl('/login')
                    console.log('token removed')
                }
                console.log('STATUS ===> ' + error.status);
                
                return throwError(() => new Error('Not Authorized'));
           }) 

        )
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];