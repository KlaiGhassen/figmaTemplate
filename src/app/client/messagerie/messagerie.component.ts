import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { AuthServicee } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss']
})
export class MessagerieComponent implements OnInit {
  msg: any;
  users: any[] = [];
  messagesRecu: any[] = [];
  messagesEnvoyer: any[] = [];
  user: any;
allmessages:any[]=[];
  constructor(private router: Router, private userService: AuthServicee,
    private msgService: MessageService,
    private gs: GlobalService,
    private actiVrouter: ActivatedRoute,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {

    this.user = this.gs.getUser();

this.msgService.getAllMsg().subscribe((res)=>{
  console.log("hi", res);
  this.allmessages=res;
})

    //recu
    this.msgService.getAllMsgEnvoye(this.gs.getUser()._id).subscribe((res) => {
      this.messagesEnvoyer = res;
      console.log("hello", res);

    })
    //envoyer
    this.msgService.getAllMsgRecu(this.gs.getUser()._id).subscribe((res) => {
      this.messagesRecu = res;
      console.log("hello", res);

    })

    this.userService.getallUsers().subscribe((res) => {
      console.log('res', res)
      for (let user of res) {
        if (user.email != this.gs.getUser().email) {

          if (user.image) {
            this.userService
              .downloadMedia(user.image)
              .subscribe((blob) => {
                var myFile = blobToFile(blob, "my-image1.png");
                const objectURL = URL.createObjectURL(blob);
                const img = this.sanitizer.bypassSecurityTrustResourceUrl(objectURL);

                user.image = img;
              })

          }
          this.users.push(user);

        }
      }
      console.log(this.users)
    })
  }

  index: any = 0;
  behaviour(i: any) {

    
    console.log("hello", i)
    this.index = i;
  }
  send() {
    this.msgService.sendMsg(this.msg, this.users[this.index]._id).subscribe((res) => {
this.allmessages.push(res.message)
this.msg="";

    })

  }

}
function blobToFile(theBlob: Blob, fileName: string) {
  var b: any = theBlob;
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  b.lastModifiedDate = new Date();
  b.name = fileName;

  //Cast to a File() type
  return <File>theBlob;
}