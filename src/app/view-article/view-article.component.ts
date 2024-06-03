import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MaterialModule } from '../material/material.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MainService } from '../service/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'amader-chuti-view-article',
  standalone: true,
  imports: [NgxSpinnerModule, MaterialModule, ReactiveFormsModule ],
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.scss'
})
export class ViewArticleComponent implements OnInit {

  @ViewChild('vc_editors_choice') vc_editors_choice!: ElementRef;
  vld_editors_choice = new FormControl()

  data: any;
  status: number;
  isHomePage: boolean = false;
  mainSer = inject(MainService);
  cdr = inject(ChangeDetectorRef);

  constructor(
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) 
    {
      this.status = 0;
    }

  ngOnInit() {
    this.spinner.show();
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.data = JSON.parse(params['data']);
        this.cdr.detectChanges();
        this.isHomePage = params['isHomePage'];
        console.log(this.data, 'view page');
      }
      this.spinner.hide();
    });
    if(this.data.isEditorsChoice== 1){
      this.vld_editors_choice.setValue(true);
    }else{
      this.vld_editors_choice.setValue(false);
    }

    this.status = this.data.status;
    
    console.log(this.vld_editors_choice.value, 'view page');
  }

  updateArticle(docId: string, newData: any) {
    this.mainSer.updateDocument('articles', docId, newData).then(() => {
      console.log('Document successfully updated!');
      this.mainSer.openSnackBar('Published Successfully!', 'right', 'top', 5000);
    }).catch((error) => {
      console.error('Error updating document: ', error);
    });
  }

  submit(status: number, docId: string ){
    console.log(this.vld_editors_choice.value);
    const newArticleData = {
      isEditorsChoice: this.vld_editors_choice.value == true ? '1' : '0',
      status: status,
      date: this.formatDate(new Date())
    };


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this action!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Confirm',
      customClass: {
        container: 'approve',
        popup: 'popup-class',
        title: 'sweet_titleImportant',
        closeButton: 'close-button-class',
        icon: 'icon-class',
        image: 'image-class',
        input: 'input-class',
        actions: 'actions-class',
        confirmButton: 'confirm-button-class',
        cancelButton: 'cancel-button-class',
        footer: 'sweet_titleImportant'
      }
    }).then((result) => {
      if(result.isConfirmed){
        this.updateArticle(docId, newArticleData);
      }
    })
    
  }

  // Helper function to format the date
  formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
  const day = ('0' + date.getDate()).slice(-2);
  return `${day}-${month}-${year}`;
}

}
