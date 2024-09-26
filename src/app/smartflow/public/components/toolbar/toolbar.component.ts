import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() menuToggle = new EventEmitter<void>();

  onToggleMenu() {
    this.menuToggle.emit();
  }
}
