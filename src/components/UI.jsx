/**
 * Loading skeleton component for better UX during data fetching
 */
export const Skeleton = ({ width = 'w-full', height = 'h-4', className = '' }) => (
  <div className={`${width} ${height} bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-pulse ${className}`} />
);

/**
 * Loading spinner component
 */
export const Spinner = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`${sizes[size]} border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin`} />
    </div>
  );
};

/**
 * Error message component
 */
export const ErrorMessage = ({ message, onRetry }) => (
  <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">⚠️</span>
        <div>
          <p className="font-semibold text-red-200">Error</p>
          <p className="text-red-300 text-sm">{message}</p>
        </div>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition text-sm font-medium"
        >
          Retry
        </button>
      )}
    </div>
  </div>
);

/**
 * Success message component
 */
export const SuccessMessage = ({ message }) => (
  <div className="bg-green-900/20 border border-green-500 rounded-lg p-4 flex items-center space-x-3">
    <span className="text-2xl">✓</span>
    <p className="text-green-200">{message}</p>
  </div>
);

/**
 * Section container with consistent styling
 */
export const Section = ({ title, icon, children, className = '' }) => (
  <section className={`py-16 px-4 md:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {title && (
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">
            {icon && <span className="mr-3">{icon}</span>}
            {title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600" />
        </div>
      )}
      {children}
    </div>
  </section>
);

/**
 * Card component for consistent styling
 */
export const Card = ({ children, className = '', hover = true }) => (
  <div
    className={`bg-gray-800 border border-gray-700 rounded-lg p-6 ${
      hover ? 'hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition' : ''
    } ${className}`}
  >
    {children}
  </div>
);

/**
 * Badge component for tags/skills
 */
export const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-700 text-gray-200',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-white',
    danger: 'bg-red-600 text-white',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

/**
 * Button component with variants
 */
export const Button = ({ children, variant = 'primary', size = 'md', disabled = false, className = '', ...props }) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-gray-200',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      disabled={disabled}
      className={`${variants[variant]} ${sizes[size]} rounded font-medium transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default {
  Skeleton,
  Spinner,
  ErrorMessage,
  SuccessMessage,
  Section,
  Card,
  Badge,
  Button,
};
