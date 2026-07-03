import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent implements OnInit {
  downloadIcon = faDownload;
  isCvOverlayOpen = false;

  openCvOverlay(): void {
    this.isCvOverlayOpen = true;
  }

  closeCvOverlay(): void {
    this.isCvOverlayOpen = false;
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
