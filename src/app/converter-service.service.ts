import { Injectable } from '@angular/core';

@Injectable()
export class ConverterServiceService {

  constructor() { }

  convertToHtml(data){
    // turn the data into an array
      data = data.split('\n\n');
    // make a clone of the array to be used in the if statements.
      let tree = data.slice();
       for (var i = 0; i < tree.length; ++i) {
    // turn #s into heading tags if #s are present
      if (tree[i].match(/\*\*|\*\*/)) {
        data[i] = data[i]
          .replace(/\*\*([^\*|\s]+)\*\*/g, '<strong>$1</strong>');
        
     }
      if (tree[i].match(/\/\/|\/\//)) {
        data[i] = data[i]
          .replace(/\/\/([^\*|\s]+)\/\//g, '<em>$1</em>');
        }
      if (tree[i].match(/\[\[|\]\]/)) {
        let geturl =tree[i].match(/\bhttps?:\/\/\S+/gi);//pick only url from string
        data[i] = data[i].replace(/\[\[(.*?)\]\]/g, '<a href="'+geturl+'" target="_blank">Learn more</a>');
           console.log( 'here'+data[i]);
        }
       
     }
    
    data =data.join('\n\n');
    return  data;
  }

  changeMe(type: string){
    let initText: string = '';  
    let result: string = ''; 
    switch (type) {
      case 'BOLD':
        initText = 'Bold Text';
        result= '<b>'+initText+'</b>';
        console.log(result);
        break;
      case 'ITALIC':
        initText = 'Italic Text';
        result= '<em>'+initText+'</em>';
        break;
      case 'URL':
        initText = 'URL';
        result= '<a href="">'+initText+'</a>';
        break;
     
    }
    return result;
  }
  
}
