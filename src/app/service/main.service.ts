import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../shared/snackbar/snackbar.component';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(dataMessage: string, posHorizon: any, posVertical: any, duration: number) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: {
        message: dataMessage,
      },
      horizontalPosition: posHorizon,
      verticalPosition: posVertical,
      duration: duration,
    });
  }

  popupMsg(icon?: any, title?: any, text?: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      width: '26em'
    }).then(() => {
      if (text == "Unauthorized") {
        // this.ser_main.currentUser.clearData();
        // this.ser_main.subMenu.clearData();
        // this.ser_main.cur_url.goTo('/login');
      }
    });
  }

}
