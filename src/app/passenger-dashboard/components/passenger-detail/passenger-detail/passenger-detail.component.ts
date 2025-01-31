import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { passenger } from '../../../containers/passenger-dashboard/passenger-dashboard/passenger-dashboard.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-passenger-detail',
  imports: [CommonModule],
  templateUrl: './passenger-detail.component.html',
  styleUrl: './passenger-detail.component.scss'
})
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  detail!: passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;
  constructor() { }


  ngOnChanges(changes: any) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }

}
