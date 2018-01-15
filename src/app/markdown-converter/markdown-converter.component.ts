import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown-converter',
  templateUrl: './markdown-converter.component.html',
  styleUrls: ['./markdown-converter.component.css']
})
export class MarkdownConverterComponent implements OnInit {
  public markDown: string;
  public html: string;
  constructor() { }

  ngOnInit() {
  }

}
