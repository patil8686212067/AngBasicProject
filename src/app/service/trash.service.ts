import { Injectable } from '@angular/core';

import {HttputilService} from './httputil.service';
import { Note } from '../object/Note';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';//hamid added


@Injectable()
export class TrashService {
    model:any={};
    notes: Note[];
    private NoteSubject=new Subject<any>();

    constructor (private httpservice: HttputilService) {}
 
    
         
    

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
   
    restoreNote(model: any):Observable<HttpResponse<any>>
    {
        let url="note/updateNote";
        return this.httpservice.putServiceData(url,model);
    }
   
    deleteNoteForever(model:any):Observable<HttpResponse<any>>{
        let url="note/deleteNote";
        return this.httpservice.deleteServiceData(url,model);
       }
        

}