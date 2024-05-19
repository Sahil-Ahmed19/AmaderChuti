import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

export interface Item {
  id: number;
  content: string;
}

@Component({
  selector: 'amader-chuti-edit-blog',
  standalone: true,
  imports: [ FormsModule, MaterialModule],
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.scss'
})

export class EditBlogComponent {

  items: Item[] = [];
  newItem: string = '';
  id: number = 0;

  inputField : string[] = [];
  type: number[] = [];

  addInput(type: number) {
    this.type.push(type);
    const item: Item = {
      id: type,
      content: ''
    };
    this.items.push(item);
    console.log(this.items);
  }

  
}
