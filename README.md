# Automated-Notice-Genration
A professional-grade document automation suite built with Angular for generating institutional event notices. Features a real-time WYSIWYG editor, dynamic letterhead branding, and A4 landscape PDF rendering.


# Institutional Notice Automation System (INAS)

INAS is a sophisticated web-based utility designed to standardize and streamline the creation of official academic and extracurricular notices. By abstracting the document design process, it ensures consistent branding and formatting across all institutional communications.

## 🚀 Key Capabilities

- **Dynamic Branding Engine**: Integrated letterhead system supporting variable institutional names and club symbols.
- **Real-Time WYSIWYG Preview**: Instant visual feedback via an integrated Reactive Form architecture.
- **Landscape Optimization**: Specifically engineered for horizontal notice board layouts (A4-L) with precise CSS-to-PDF mapping.
- **High-Fidelity Export**: Implements `html2canvas` for pixel-perfect rendering and `jsPDF` for generating print-ready documents.
- **Standalone Architecture**: Built using Angular's latest standalone component model for optimal performance and maintainability.

## 🛠 Technical Architecture

- **Framework**: Angular 18+ (Standalone)
- **State Management**: Reactive Form Groups with real-time value-accessors.
- **Rendering Engine**: HTML5 Canvas with high-DPI scaling (Scale: 2) for crisp text output.
- **Document Specs**: ISO 216 A4 Landscape (297mm x 210mm).

## 📦 Installation & Deployment

1. **Clone & Install**
   ```bash
   git clone https://github.com
   npm install
