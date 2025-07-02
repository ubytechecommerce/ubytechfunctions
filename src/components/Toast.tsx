import React from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import { useToast } from '../contexts/ToastContext';

const Toast: React.FC = () => {
  const { toast, hideToast } = useToast();

  if (!toast) return null;

  const icons = {
    success: CheckCircle,
    error: AlertCircle
  };

  const colors = {
    success: 'from-green-500 to-green-600',
    error: 'from-red-500 to-red-600'
  };

  const IconComponent = icons[toast.type];

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div className={`bg-gradient-to-r ${colors[toast.type]} text-white p-4 rounded-lg shadow-lg max-w-sm flex items-center gap-3`}>
        <IconComponent className="w-5 h-5 flex-shrink-0" />
        <p className="flex-1 text-sm font-medium">{toast.message}</p>
        <button
          onClick={hideToast}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;