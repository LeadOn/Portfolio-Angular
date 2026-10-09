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

  // Defer closing so the <a download> stays in the DOM until the browser has started the download,
  // otherwise Chrome loses the filename and saves the file under a GUID without extension.
  closeCvOverlayAfterDownload(): void {
    setTimeout(() => this.closeCvOverlay());
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
