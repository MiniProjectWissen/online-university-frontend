import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() error:any;
  @Output() close = new EventEmitter<void>();

  onCloseClick() {
    this.close.emit();
  }

}
