import UHeading from '@/utils/UHeading';
import GlassmorphismCard from '@/utils/GlassmorphismCard';

export const metadata = {
  title: 'Complaints Cell | NaqviX',
  description: 'NaqviX Complaints Cell - Submit complaints, feedback, and disputes. Learn about our complaint handling process, resolution timeframes, and contact information for customer support.',
};

const ComplaintsCell = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0E0E] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <UHeading text={'COMPLAINTS CELL'} />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Your feedback matters to us. We are committed to resolving your concerns promptly and fairly.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Commitment to Customer Satisfaction</h2>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              At NaqviX, we strive to provide exceptional service across all our business solutions including 
              BPO/KPO services, AI solutions, marketing, development, finance, data analytics, automation, and consulting. 
              However, we understand that sometimes issues may arise, and we are committed to addressing them promptly and effectively.
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              Our Complaints Cell is designed to ensure that all customer concerns are handled with the utmost care, 
              transparency, and professionalism. We believe in continuous improvement and use your feedback to enhance our services.
            </p>
          </GlassmorphismCard>

          {/* How to Contact Us */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Contact Our Complaints Cell</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Primary Contact Methods</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">@</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Email Address:</p>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">complaints@naqvix.com</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">For detailed complaints and documentation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Phone Number:</p>
                      <p className="text-green-600 dark:text-green-400 font-medium">+92 3222 777 414</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Available Monday to Friday, 9:00 AM - 6:00 PM (PKT)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Alternative Contact Methods</h3>
                <div className="space-y-2 text-gray-800 dark:text-gray-200">
                  <p><strong>General Email:</strong> info@naqvix.com (Please mention "COMPLAINT" in subject line)</p>
                  <p><strong>Postal Address:</strong> Plaza#289, First Floor, Q Block (Commercial Lane) DHA, Phase 2, Lahore</p>
                  <p><strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM (Pakistan Standard Time)</p>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Resolution Timeline */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Complaint Resolution Timeline</h2>
            <div className="space-y-6">
              <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-4">Our Resolution Commitment</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">24h</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Acknowledgment</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          We will acknowledge receipt of your complaint within 24 hours of submission
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">3d</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Initial Response</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Initial assessment and response within 3 business days
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">7d</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Standard Resolution</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Most complaints resolved within 7 business days
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">15d</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Complex Issues</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Complex complaints resolved within 15 business days maximum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Note:</strong> If your complaint requires additional investigation or involves third parties, 
                  we will keep you informed of the progress and provide regular updates every 3 business days until resolution.
                </p>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Types of Complaints */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Types of Complaints We Handle</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Service-Related Complaints</h3>
                <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                  <li>• BPO/KPO service quality issues</li>
                  <li>• AI solution performance concerns</li>
                  <li>• Marketing campaign effectiveness</li>
                  <li>• Development project delays or issues</li>
                  <li>• Finance and accounting discrepancies</li>
                  <li>• Data analytics accuracy concerns</li>
                  <li>• Automation system malfunctions</li>
                  <li>• Consulting service dissatisfaction</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Business-Related Complaints</h3>
                <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                  <li>• Billing and payment disputes</li>
                  <li>• Contract terms and conditions</li>
                  <li>• Communication and response delays</li>
                  <li>• Data privacy and security concerns</li>
                  <li>• Staff behavior or professionalism</li>
                  <li>• Delivery timeline issues</li>
                  <li>• Technical support problems</li>
                  <li>• General service feedback</li>
                </ul>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Complaint Process */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Complaint Handling Process</h2>
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Submit Complaint</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Contact us via email or phone with detailed information</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Acknowledgment & Assignment</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">We acknowledge receipt and assign a complaint reference number</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Investigation & Analysis</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Our team investigates the issue thoroughly and fairly</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Resolution & Communication</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">We provide a solution and communicate the outcome clearly</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Follow-up & Closure</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">We follow up to ensure satisfaction and close the complaint</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Information Required */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information Required for Complaint Submission</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p className="mb-4">
                To help us process your complaint efficiently, please provide the following information:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Full name and contact details</li>
                    <li>• Company name (if applicable)</li>
                    <li>• Preferred communication method</li>
                    <li>• Account or reference number</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Complaint Details</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Nature of the complaint</li>
                    <li>• Date and time of incident</li>
                    <li>• Service or product involved</li>
                    <li>• Supporting documentation</li>
                    <li>• Desired resolution outcome</li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Escalation Process */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Escalation Process</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                If you are not satisfied with the initial resolution of your complaint, you have the right to escalate the matter:
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">Escalation Contact</h3>
                <p><strong>Senior Management Email:</strong> escalation@naqvix.com</p>
                <p><strong>Direct Phone:</strong> +92 3222 777 414 (Ask for Complaints Manager)</p>
                <p className="text-sm mt-2">Escalated complaints will be reviewed by senior management within 3 business days.</p>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Contact Information */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                For any questions about our complaints process or to submit a complaint, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>Company:</strong> NaqviX</p>
                <p><strong>Complaints Email:</strong> complaints@naqvix.com</p>
                <p><strong>General Email:</strong> info@naqvix.com</p>
                <p><strong>Phone:</strong> +92 3222 777 414</p>
                <p><strong>Address:</strong> Plaza#289, First Floor, Q Block (Commercial Lane) DHA, Phase 2, Lahore</p>
                <p><strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM (PKT)</p>
              </div>
            </div>
          </GlassmorphismCard>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} NaqviX. All rights reserved.</p>
          <p className="text-sm mt-2">We are committed to resolving your concerns and improving our services.</p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsCell;