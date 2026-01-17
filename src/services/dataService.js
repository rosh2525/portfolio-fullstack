import apiClient from './apiClient';

/**
 * Projects Service
 * Handles all project-related API calls
 */
export const projectService = {
  /**
   * Fetch all projects from backend
   * @returns {Promise<Array>} List of projects
   */
  getAllProjects: async () => {
    try {
      const response = await apiClient.get('/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  /**
   * Fetch single project by ID
   * @param {number} id - Project ID
   * @returns {Promise<Object>} Project details
   */
  getProjectById: async (id) => {
    try {
      const response = await apiClient.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching project ${id}:`, error);
      throw error;
    }
  },
};

/**
 * Experiences Service
 * Handles all experience-related API calls
 */
export const experienceService = {
  /**
   * Fetch all experiences
   * @returns {Promise<Array>} List of experiences
   */
  getAllExperiences: async () => {
    try {
      const response = await apiClient.get('/experiences');
      return response.data;
    } catch (error) {
      console.error('Error fetching experiences:', error);
      throw error;
    }
  },

  /**
   * Fetch single experience by ID
   * @param {number} id - Experience ID
   * @returns {Promise<Object>} Experience details
   */
  getExperienceById: async (id) => {
    try {
      const response = await apiClient.get(`/experiences/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching experience ${id}:`, error);
      throw error;
    }
  },
};

/**
 * Resume Service
 * Handles resume download and status
 */
export const resumeService = {
  /**
   * Download resume PDF
   * @returns {Promise} Downloads resume file
   */
  downloadResume: async () => {
    try {
      const response = await apiClient.get('/resume/download', {
        responseType: 'blob',
      });
      
      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Roshan_Kumar_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('Error downloading resume:', error);
      throw error;
    }
  },

  /**
   * Get resume availability status
   * @returns {Promise<Object>} Resume status info
   */
  getResumeStatus: async () => {
    try {
      const response = await apiClient.get('/resume/status');
      return response.data;
    } catch (error) {
      console.error('Error fetching resume status:', error);
      throw error;
    }
  },
};

export default {
  projectService,
  experienceService,
  resumeService,
};
