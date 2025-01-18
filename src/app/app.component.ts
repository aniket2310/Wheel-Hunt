import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonRouterOutlet,IonMenu, IonHeader, IonItem, IonAvatar, IonLabel, IonList, IonIcon, IonItemDivider, IonToolbar, IonTitle, IonMenuToggle } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import {register} from 'swiper/element/bundle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from './home/notification-dialog/notification-dialog.component';
import { FeedbackDialogComponent } from './home/feedback-dialog/feedback-dialog.component';

register()

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonMenuToggle,IonItemDivider, IonIcon, IonList, IonLabel, IonItem, IonHeader, IonApp, IonRouterOutlet,IonMenu,RouterLink,MatSlideToggleModule],

})
export class AppComponent {

  isChecked: boolean = false;

  constructor(private alertController: AlertController,private dialog: MatDialog) {

    document.body.classList.remove('dark');
    document.body.setAttribute('data-theme', 'light');
  }

  onToggleChange(event: any) {
    console.log('Toggle checked:', event.checked); 
  
    let header: string;
    let message: string;
  
    if (event.checked) {
      header = 'Notifications Enabled';
      message = 'You have turned on notifications.';
    } else {
      header = 'Notifications Disabled';
      message = 'You have turned off notifications.';
    }
  
    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      data: {
        header: header,
        message: message
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
    });
  }
  
  showFeedbackDialog() {
    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
      data: {
        header: 'Share us your Valuable Feedback',
        message: 'Please tell us about your experience. Choose the below expression:'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
    });
  }

  

}
