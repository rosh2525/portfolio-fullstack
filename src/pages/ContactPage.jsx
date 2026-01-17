import { useState } from 'react';
import { useForm, useLocalStorage } from '../hooks';
import { Section, Card, Button, SuccessMessage, ErrorMessage } from '../components/UI';

/**
 * Contact page - Contact form with validation
 */
export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleSubmit = async (values) => {
    setSubmitting(true);
    setError(null);
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would send to backend:
      // const response = await fetch('/api/v1/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values)
      // });

      console.log('Form submitted:', values);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      form.setValues(initialValues);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const form = useForm(initialValues, handleSubmit);

  return (
    <Section title="Get In Touch" icon="✉️">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <p className="text-gray-400 text-sm font-semibold mb-2">Email</p>
            <a
              href="mailto:roshan@example.com"
              className="text-lg text-blue-400 hover:text-blue-300 transition break-all"
            >
              roshan@example.com
            </a>
          </Card>

          <Card>
            <p className="text-gray-400 text-sm font-semibold mb-2">Phone</p>
            <a
              href="tel:+91-XXXXXXXXXX"
              className="text-lg text-blue-400 hover:text-blue-300 transition"
            >
              +91-XXXXXXXXXX
            </a>
          </Card>

          <Card>
            <p className="text-gray-400 text-sm font-semibold mb-3">Follow Me</p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition"
              >
                💼
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition"
              >
                𝕏
              </a>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <Card>
            <form onSubmit={form.handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.values.subject}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  placeholder="What is this about?"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.values.message}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  placeholder="Your message..."
                  rows="6"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition resize-none"
                  required
                />
              </div>

              {/* Status Messages */}
              {submitted && (
                <SuccessMessage message="Thanks for reaching out! I'll get back to you soon." />
              )}
              {error && <ErrorMessage message={error} />}

              {/* Submit Button */}
              <Button
                variant="primary"
                size="lg"
                disabled={submitting}
                className="w-full"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-gray-500 text-sm text-center">
                I typically respond within 24 hours.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
