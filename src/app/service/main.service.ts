import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../shared/snackbar/snackbar.component';
import Swal from 'sweetalert2';
import { Firestore, collectionData, collection, doc, updateDoc, DocumentReference, DocumentData, getDoc } from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  firestore: Firestore = inject(Firestore);

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

  getDocumentById(collectionPath: string, docId: string | null): Observable<any> {
    const docRef: DocumentReference<DocumentData> = doc(this.firestore, `${collectionPath}/${docId}`);
    return from(getDoc(docRef)).pipe(
      map(docSnapshot => docSnapshot.exists() ? docSnapshot.data() : undefined)
    );
  }

  getCollectionData(collectionPath: string): Observable<any[]> {
    const col = collection(this.firestore, collectionPath);
    return collectionData(col, { idField: 'id' });
  }

  updateDocument(collectionPath: string, docId: string, data: any): Promise<void> {
    const docRef = doc(this.firestore, `${collectionPath}/${docId}`);
    return updateDoc(docRef, data);
  }

  // getEditorsChoiceData(collectionPath: string): Observable<any[]> {
  //   const colRef = collection(this.firestore, collectionPath);
  //   const q = query(colRef, where('isEditorsChoice', '==', 1));
  //   return collectionData(q, { idField: 'id' });
  // }

}
