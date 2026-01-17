import axios from 'axios';

// Use relative path on Vercel (Vercel will rewrite to ALB), or direct ALB for local dev
const isProduction = import.meta.env.PROD;
const API_BASE_URL = isProduction ? '/api/v1' : (import.meta.env.VITE_API_URL || 'http://localhost:9090/api/v1');

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add auth token, logging, etc.
apiClient.interceptors.request.use(
  (config) => {
    // Add authorization header if token exists
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log request in development
    if (import.meta.env.DEV) {
      console.log(`[API Request] ${config.method.toUpperCase()} ${config.url}`);
    }

    return config;
  },
  (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors, transform data, etc.
apiClient.interceptors.response.use(
  (response) => {
    // Log successful response in development
    if (import.meta.env.DEV) {
      console.log(`[API Response] ${response.status} from ${response.config.url}`);
    }
    return response;
  },
  (error) => {
    // Handle different error types
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      console.error(`[API Error] ${status}:`, data.message || data);

      // Handle specific status codes
      if (status === 401) {
        // Unauthorized - clear auth and redirect to login
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      } else if (status === 403) {
        console.error('Access forbidden');
      } else if (status === 404) {
        console.error('Resource not found');
      } else if (status === 500) {
        console.error('Server error');
      }
    } else if (error.request) {
      // Request made but no response
      console.error('[API Error] No response from server:', error.request);
    } else {
      // Error in request setup
      console.error('[API Error] Request setup error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
