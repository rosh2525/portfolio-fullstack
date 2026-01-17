import { Download } from 'lucide-react';

export default function ResumeButton() {
  const handleDownload = () => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    window.location.href = `${apiUrl}/api/v1/resume/download`;
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
    >
      <Download size={18} />
      <span>Download Resume</span>
    </button>
  );
}
