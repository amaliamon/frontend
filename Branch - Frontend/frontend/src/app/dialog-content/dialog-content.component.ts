import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { SubjectInServiceService } from '../subject-in-service.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
  @Input() label: string | undefined;
  constructor(private SubjectInService: SubjectInServiceService, private http: HttpClient){}
  loading: boolean = false;
  predizione: string="";
  confidenza=0;
  stringa: string="";

  data: string[] = [];
  ngOnInit(): void {
    this.SubjectInService.currentData.subscribe((e) => this.data.push(e));
    this.stringa+=this.data;
    console.log(this.stringa);
    this.prediction(this.stringa);
  }

  prediction(rev: String){
    this.loading = true;
    this.http.post<any>('http://127.0.0.1:5555/prediction?query=' + rev, null).subscribe(res => {
      console.log(res.prediction);
      console.log(res.confidence_score.toFixed(2));
      this.predizione=res.prediction;
      this.confidenza=res.confidence_score.toFixed(2);
      this.loading = false;
    })
  }
}
