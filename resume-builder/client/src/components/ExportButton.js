import React from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { FaFilePdf } from 'react-icons/fa'

export default function ExportButton({ targetElementId, fileName = 'resume' }) {
  const handleExport = async () => {
    const element = document.getElementById(targetElementId)
    if (!element) return

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        logging: false,
        useCORS: true
      })
      
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm'
      })
      
      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`${fileName}.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }

  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
    >
      <FaFilePdf /> Export as PDF
    </button>
  )
}