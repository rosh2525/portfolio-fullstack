export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Contact</h1>
        <p className="text-gray-500 mb-12">Let's get in touch</p>

        <div className="space-y-8">
          {/* Email */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Email</p>
            <a
              href="mailto:techsavvy.roshan@gmail.com"
              className="text-lg hover:text-blue-600 transition font-medium"
            >
              techsavvy.roshan@gmail.com
            </a>
            <p className="text-sm text-gray-600 mt-1">Primary email address</p>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Alternate Email */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Alternate Email</p>
            <a
              href="mailto:b23bb1037@iitj.ac.in"
              className="text-lg hover:text-blue-600 transition font-medium"
            >
              b23bb1037@iitj.ac.in
            </a>
            <p className="text-sm text-gray-600 mt-1">IIT Jodhpur official email</p>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Phone */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Phone</p>
            <a
              href="tel:+917604864645"
              className="text-lg hover:text-blue-600 transition font-medium"
            >
              +91-7604864645
            </a>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Social Links */}
          <div className="space-y-4">
            <p className="text-sm text-gray-500 mb-4">Find me online</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/rosh2525"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                GitHub
              </a>
              <span className="text-gray-300">/</span>
              <a
                href="https://linkedin.com/in/roshan-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                LinkedIn
              </a>
              <span className="text-gray-300">/</span>
              <a
                href="https://codeforces.com/profile/RoshanKumar2525"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                Codeforces
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
