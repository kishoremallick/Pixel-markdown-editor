import { Component,HostListener,ElementRef } from '@angular/core';
import { ConverterServiceService } from './converter-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultText = '';
  markToHtml ='';
  constructor(private converter:ConverterServiceService) {
      
    }

   onValueChange(event) {
       console.log("HTML :"+event.html); // this should print markdown which user entered
       console.log("MARKDOWN :"+event.markDown); // this should print html output for the markdown
       this.markToHtml=event.html;
   }
   changeContent(text){
     console.log('oo');
      this.markToHtml=this.converter.changeMe(text);
   }
}
