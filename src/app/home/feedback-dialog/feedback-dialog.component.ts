import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss'],
  standalone:true,
  imports:[MatDialogModule,MatButtonModule]
})
export class FeedbackDialogComponent  implements OnInit {

  ngOnInit() {}

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<FeedbackDialogComponent>) { }

  onFeedbackSelected(feedback: string) {
    if (feedback === 'Angry') {
      console.log('Very Dissatisfied');
    } else if (feedback === 'Dissatisfied') {
      console.log('Dissatisfied');
    } else if (feedback === 'Neutral') {
      console.log('Neutral');
    } else if (feedback === 'Satisfied') {
      console.log('Satisfied');
    } else if (feedback === 'Very Satisfied') {
      console.log('Very Satisfied');
    }
  }

  onClose(){
    this.dialogRef.close();
  }
  

}
