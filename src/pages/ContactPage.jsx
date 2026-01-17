import { Section, Card } from '../components/UI';

export const ContactPage = () => (
  <div className="space-y-12">
    <Section
      title="Get In Touch"
      subtitle="Let's collaborate on your next project"
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:techsavvy.roshan@gmail.com" className="text-blue-400 hover:text-blue-300 font-semibold">
                    techsavvy.roshan@gmail.com
                  </a>
                  <a href="mailto:b23bb1037@iitj.ac.in" className="text-blue-400 hover:text-blue-300 font-semibold block">
                    b23bb1037@iitj.ac.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+917604864645" className="text-blue-400 hover:text-blue-300 font-semibold">
                    +91-7604864645
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-gray-400 text-sm">Education</p>
                  <p className="text-white font-semibold">IIT Jodhpur</p>
                  <p className="text-gray-400 text-sm">Jodhpur, India</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Social Links */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
            
            <div className="space-y-3">
              <a
                href="https://github.com/rosh2525"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
              >
                <span className="text-2xl">🐙</span>
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <p className="text-gray-400 text-sm">github.com/rosh2525</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/roshan-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
              >
                <span className="text-2xl">💼</span>
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <p className="text-gray-400 text-sm">linkedin.com/in/roshan-kumar</p>
                </div>
              </a>

              <a
                href="https://codeforces.com/profile/RoshanKumar2525"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
              >
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="text-white font-semibold">Codeforces</p>
                  <p className="text-gray-400 text-sm">RoshanKumar2525</p>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  </div>
);

export default ContactPage;
