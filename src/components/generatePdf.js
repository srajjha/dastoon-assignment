import html2pdf from 'html2pdf.js';

const generatePDF = (divElement) => {
  const pdfOptions = {
    margin: 10,
    filename: 'generated-document.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf(divElement, pdfOptions);
};

