import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MarkDownDirective } from './mark-down.directive';
import { MarkdownConverterComponent } from './markdown-converter/markdown-converter.component';
import { ConverterServiceService } from './converter-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MarkDownDirective,
    MarkdownConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [ConverterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
