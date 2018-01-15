import { Directive,ElementRef,Input,EventEmitter,Output,Renderer,HostListener } from '@angular/core';
import { MarkdownConverterComponent } from './markdown-converter/markdown-converter.component';
import { ConverterServiceService } from './converter-service.service';
@Directive({
  selector: '[ccMarkDown]'
})
export class MarkDownDirective {
    @Input() value: string;
    @Output() valueChange = new EventEmitter<MarkdownConverterComponent>();
    timeOut: any = null;
    targetval: any = '';
    MarkdownConverter =new MarkdownConverterComponent();
    constructor(el: ElementRef,private element: ElementRef, private renderer: Renderer,private converter:ConverterServiceService) {
      
    }

    @HostListener('keyup', ['$event']) onChange(event: any) {
      if(this.timeOut){ 
        clearTimeout(this.timeOut);
      }
      this.targetval = event.target.value;
      this.MarkdownConverter.html=this.converter.convertToHtml(this.targetval);
      this.MarkdownConverter.markDown=this.targetval;
      this.timeOut = setTimeout(()=>{
        this.timeOut = null;
        this.valueChange.emit(this.MarkdownConverter);
      },100);
    }
}
