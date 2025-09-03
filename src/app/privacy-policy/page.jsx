import UHeading from '@/utils/UHeading';
import GlassmorphismCard from '@/utils/GlassmorphismCard';

export const metadata = {
  title: 'Privacy Policy | NaqviX',
  description: 'Privacy Policy for NaqviX services including data protection, information collection, and privacy practices for BPO/KPO, AI solutions, marketing, development, finance, data analytics, automation, and consulting services.',
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0E0E] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <UHeading text={'PRIVACY POLICY'} />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              At NaqviX, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              NaqviX provides comprehensive business solutions including BPO/KPO services, AI solutions, marketing, 
              development services, finance & accounting, data analytics, automation & RPA, and consulting & strategy services. 
              This policy applies to all our services and interactions.
            </p>
          </GlassmorphismCard>

          {/* Information We Collect */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <div>
                <h3 className="text-lg font-semibold mb-2">2.1 Personal Information</h3>
                <p className="mb-2">We may collect the following personal information:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name, email address, phone number, and business address</li>
                  <li>Company information and job title</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences and history</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">2.2 Business Information</h3>
                <p className="mb-2">For our BPO/KPO and consulting services, we may collect:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Business processes and operational data</li>
                  <li>Financial and accounting records</li>
                  <li>Marketing and customer data</li>
                  <li>Technical specifications and system information</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">2.3 Technical Information</h3>
                <p className="mb-2">We automatically collect certain technical information:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP address, browser type, and device information</li>
                  <li>Website usage patterns and analytics data</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log files and system performance data</li>
                </ul>
              </div>
            </div>
          </GlassmorphismCard>

          {/* How We Use Information */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <div>
                <h3 className="text-lg font-semibold mb-2">3.1 Service Delivery</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Providing BPO/KPO, AI, development, and consulting services</li>
                  <li>Processing payments and managing accounts</li>
                  <li>Communicating about projects and deliverables</li>
                  <li>Providing customer support and technical assistance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">3.2 Business Operations</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Improving our services and developing new solutions</li>
                  <li>Conducting market research and analytics</li>
                  <li>Ensuring security and preventing fraud</li>
                  <li>Complying with legal and regulatory requirements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">3.3 Marketing and Communication</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Sending service updates and newsletters (with consent)</li>
                  <li>Providing information about relevant services</li>
                  <li>Conducting customer satisfaction surveys</li>
                  <li>Personalizing your experience with our services</li>
                </ul>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Information Sharing */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Information Sharing and Disclosure</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>4.1 Service Providers:</strong> We may share information with trusted third-party service providers 
                who assist us in delivering our services, such as cloud hosting, payment processing, and analytics platforms.
              </p>
              <p>
                <strong>4.2 Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, 
                your information may be transferred as part of the business transaction.
              </p>
              <p>
                <strong>4.3 Legal Requirements:</strong> We may disclose information when required by law, 
                court order, or to protect our rights, property, or safety.
              </p>
              <p>
                <strong>4.4 Consent:</strong> We may share information with your explicit consent or at your direction.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Data Security */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Data Security</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>5.1 Security Measures:</strong> We implement industry-standard security measures including 
                encryption, access controls, secure data centers, and regular security audits to protect your information.
              </p>
              <p>
                <strong>5.2 Data Encryption:</strong> All sensitive data is encrypted both in transit and at rest 
                using advanced encryption protocols.
              </p>
              <p>
                <strong>5.3 Access Controls:</strong> We maintain strict access controls and employee training 
                programs to ensure only authorized personnel can access your information.
              </p>
              <p>
                <strong>5.4 Incident Response:</strong> We have established procedures for detecting, responding to, 
                and reporting any security incidents or data breaches.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Data Retention */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Data Retention</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>6.1 Retention Period:</strong> We retain your personal information for as long as necessary 
                to provide our services, comply with legal obligations, and resolve disputes.
              </p>
              <p>
                <strong>6.2 Business Records:</strong> Business and financial records may be retained for up to 7 years 
                or as required by applicable laws and regulations.
              </p>
              <p>
                <strong>6.3 Data Deletion:</strong> Upon request or when no longer needed, we will securely delete 
                or anonymize your personal information in accordance with our data retention policies.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Your Rights */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Your Privacy Rights</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>7.1 Access and Correction:</strong> You have the right to access, update, or correct 
                your personal information in our records.
              </p>
              <p>
                <strong>7.2 Data Portability:</strong> You may request a copy of your personal information 
                in a structured, machine-readable format.
              </p>
              <p>
                <strong>7.3 Deletion:</strong> You may request deletion of your personal information, 
                subject to legal and contractual obligations.
              </p>
              <p>
                <strong>7.4 Opt-out:</strong> You can opt-out of marketing communications at any time 
                by following the unsubscribe instructions in our emails.
              </p>
              <p>
                <strong>7.5 Complaints:</strong> You have the right to file a complaint with relevant 
                data protection authorities if you believe your privacy rights have been violated.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Cookies and Tracking */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>8.1 Cookie Usage:</strong> We use cookies and similar technologies to enhance your 
                browsing experience, analyze website traffic, and personalize content.
              </p>
              <p>
                <strong>8.2 Types of Cookies:</strong> We use essential cookies for website functionality, 
                analytics cookies for performance monitoring, and marketing cookies for advertising purposes.
              </p>
              <p>
                <strong>8.3 Cookie Control:</strong> You can control cookie settings through your browser 
                preferences, though disabling certain cookies may affect website functionality.
              </p>
            </div>
          </GlassmorphismCard>

          {/* International Transfers */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. International Data Transfers</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>9.1 Global Services:</strong> As we provide services to clients worldwide, 
                your information may be transferred to and processed in countries other than your own.
              </p>
              <p>
                <strong>9.2 Safeguards:</strong> We ensure appropriate safeguards are in place for international 
                transfers, including standard contractual clauses and adequacy decisions.
              </p>
              <p>
                <strong>9.3 Compliance:</strong> All international transfers comply with applicable data 
                protection laws and regulations.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Children's Privacy */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Children's Privacy</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>10.1 Age Restriction:</strong> Our services are not intended for individuals under 18 years of age. 
                We do not knowingly collect personal information from children.
              </p>
              <p>
                <strong>10.2 Parental Notice:</strong> If we become aware that we have collected information from 
                a child under 18, we will take steps to delete such information promptly.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Changes to Privacy Policy */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>11.1 Updates:</strong> We may update this Privacy Policy from time to time to reflect 
                changes in our practices, services, or legal requirements.
              </p>
              <p>
                <strong>11.2 Notification:</strong> We will notify you of significant changes through email 
                or prominent notices on our website.
              </p>
              <p>
                <strong>11.3 Effective Date:</strong> Changes become effective on the date specified in the 
                updated Privacy Policy.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Contact Information */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Contact Us</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>Company:</strong> NaqviX</p>
                <p><strong>Email:</strong> info@naqvix.com</p>
                <p><strong>Phone:</strong> +92 3222 777 414</p>
                <p><strong>Address:</strong> Plaza#289, First Floor, Q Block (Commercial Lane) DHA, Phase 2, Lahore</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For privacy-related inquiries, please include "Privacy Policy" in the subject line of your email.
              </p>
            </div>
          </GlassmorphismCard>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} NaqviX. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;