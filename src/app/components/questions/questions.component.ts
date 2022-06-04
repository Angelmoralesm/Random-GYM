import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  conseguir_json(){
    var retrievedObject:any = localStorage.getItem('testObject');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }
}
