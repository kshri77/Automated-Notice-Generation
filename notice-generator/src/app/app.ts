import { Component, ViewChild, ElementRef } from '@angular/core'; // Added ViewChild, ElementRef
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // Reference to the notice preview element
  @ViewChild('noticeContent') noticeContent!: ElementRef;

  noticeForm = new FormGroup({
    collegeName: new FormControl('Mepco Schlenk Engineering College', Validators.required),
    logoUrl: new FormControl('mepco.png'),
    name: new FormControl('', Validators.required),
    event: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    period: new FormControl(''),
    timing: new FormControl('', Validators.required),
    venue: new FormControl('', Validators.required)
  });

  get f() { return this.noticeForm.value; }

  // Logic to generate PDF
  downloadPDF() {
    const data = this.noticeContent.nativeElement;
    html2canvas(data, { scale: 2, useCORS: true }).then(canvas => {
      const imgWidth = 297; // Landscape A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`Notice_${this.f.event}.pdf`);
    });
  }
}
