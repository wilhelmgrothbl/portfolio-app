import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();

  items: string[] = ['a father', 'liverpool fc', 'a swedish bridge champion', 'trying to be good at chess'];
  currentIndex = 0;

  closeModal() {
    this.close.emit();
  }

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex === this.items.length - 1) ? 0 : this.currentIndex + 1;
    }, 2400);
  }
}
