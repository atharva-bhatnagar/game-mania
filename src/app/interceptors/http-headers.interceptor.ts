import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req=req.clone({
            setHeaders:{
                'X-RapidAPI-Key': '1eb191bb3emsh5725a42e9c88394p1e338cjsnf1f3a40515cf',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams:{
                key:'927d2209f8424bf1aade3a3e2f795adc'
            }
        })
        return next.handle(req)
    }
}