import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private gs: GlobalService) {
  }
  //envoyer
getAllMsgEnvoye(id:any){
    return this.http.get<any>(`${this.gs.uri}/message/tosend/${id}`)
}
//recu
getAllMsgRecu(id:any){
  return this.http.get<any>(`${this.gs.uri}/message/whosend/${id}`);


}

getAllMsg(){
  return this.http.get<any>(`${this.gs.uri}/message`);


}

sendMsg(msg:any,to:any){
  return this.http.post<any>(`${this.gs.uri}/message`,{
    "whoSend":this.gs.getUser()._id, 
    "toSend":to,
    "content":msg
  });


}

}