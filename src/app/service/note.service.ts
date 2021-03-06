import { Injectable } from '@angular/core';

import {HttputilService} from './httputil.service';
import { Note } from '../object/Note';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';//hamid added


@Injectable()
export class NoteService {
    model:any={};
    notes: Note[];
    private NoteSubject=new Subject<any>();

    constructor (private httpservice: HttputilService) {}
 
    
         
    createNoteService( model: any):Observable<HttpResponse<any>>
    {
        let url = "note/createNote";
        return this.httpservice.postServiceData(url,model);
    }

    getAllNotes():Observable<HttpResponse<any>>
    {
        setTimeout(()=>{
            this.reloadAllNotes()
        });
        return this.NoteSubject.asObservable();
    }
       

   //anil..noteonloading
   reloadAllNotes():void{
    let path = "note/getAllNotes";
    this.httpservice.getServiceData(path).toPromise().then((res)=>{
      this.NoteSubject.next(res);
      });
   }
   
    updateNote( model: any,url?: string,):Observable<HttpResponse<any>>
    {
        if(!url)
            url="note/updateNote";
        return this.httpservice.putServiceData(url,model);
    }
    getAllLabel():Observable<HttpResponse<any>>
    {
        
        return this.httpservice.getAllLabel();
    }
    getLoggedUser(url: string):Observable<HttpResponse<any>>
    {
        return this.httpservice.getLoggedUser(url);
    }

    getStatus():Observable<HttpResponse<any>>
    {
    return this.httpservice.getStatus();
    }
    getUrlData(model: any):Observable<HttpResponse<any>>
    {  
        let url="note/getUrls"
        return this.httpservice.getUrlInfo(url,model);
    }
    

}