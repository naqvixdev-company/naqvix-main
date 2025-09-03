import UHeading from '@/utils/UHeading';
import GlassmorphismCard from '@/utils/GlassmorphismCard';

export const metadata = {
  title: 'Terms and Conditions | Naqvix',
  description: 'Terms and Conditions for Naqvix services including BPO/KPO, AI solutions, marketing, development, finance, data analytics, automation, and consulting services.',
};

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0E0E] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <UHeading text={'TERMS AND CONDITIONS'} />
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
              Welcome to Naqvix. These Terms and Conditions ("Terms") govern your use of our services and website. 
              By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              Naqvix provides comprehensive business solutions including BPO/KPO services, AI solutions, marketing, 
              development services, finance & accounting, data analytics, automation & RPA, and consulting & strategy services.
            </p>
          </GlassmorphismCard>

          {/* Definitions */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Definitions</h2>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>"Company"</strong> refers to Naqvix</li>
              <li><strong>"Services"</strong> refers to all business solutions provided by Naqvix</li>
              <li><strong>"Client"</strong> refers to any individual or entity using our services</li>
              <li><strong>"Agreement"</strong> refers to these Terms and any service-specific contracts</li>
              <li><strong>"Confidential Information"</strong> refers to proprietary data shared during service delivery</li>
            </ul>
          </GlassmorphismCard>

          {/* Service Agreement */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Service Agreement</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>3.1 Service Scope:</strong> Our services include but are not limited to BPO/KPO operations, 
                AI-powered solutions, digital marketing, software development, financial services, data analytics, 
                process automation, and strategic consulting.
              </p>
              <p>
                <strong>3.2 Service Delivery:</strong> We commit to delivering services with professional excellence, 
                adhering to agreed timelines and quality standards as outlined in individual service contracts.
              </p>
              <p>
                <strong>3.3 Client Responsibilities:</strong> Clients must provide necessary information, access, 
                and cooperation required for effective service delivery.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Payment Terms */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Payment Terms</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>4.1 Pricing:</strong> Service fees are as agreed in individual contracts or proposals. 
                All prices are exclusive of applicable taxes unless otherwise stated.
              </p>
              <p>
                <strong>4.2 Payment Schedule:</strong> Payments are due according to the agreed schedule. 
                Late payments may incur additional charges as specified in the service agreement.
              </p>
              <p>
                <strong>4.3 Currency:</strong> All payments shall be made in the currency specified in the service agreement.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Intellectual Property */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Intellectual Property</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>5.1 Ownership:</strong> All intellectual property developed by Naqvix in the course of 
                providing services remains the property of Naqvix unless otherwise agreed in writing.
              </p>
              <p>
                <strong>5.2 Client Data:</strong> Clients retain ownership of their data and information. 
                Naqvix will not use client data for purposes other than service delivery without explicit consent.
              </p>
              <p>
                <strong>5.3 License:</strong> Upon full payment, clients receive appropriate licenses to use 
                deliverables as specified in the service agreement.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Confidentiality */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Confidentiality</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>6.1 Non-Disclosure:</strong> Both parties agree to maintain confidentiality of all 
                proprietary information shared during the course of the business relationship.
              </p>
              <p>
                <strong>6.2 Data Security:</strong> Naqvix implements industry-standard security measures to 
                protect client data and maintains compliance with applicable data protection regulations.
              </p>
              <p>
                <strong>6.3 Duration:</strong> Confidentiality obligations survive termination of services 
                and remain in effect for a period of 5 years.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Limitation of Liability */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>7.1 Service Warranty:</strong> We warrant that services will be performed with 
                professional skill and care. Our liability is limited to re-performing defective services 
                or refunding fees for unsatisfactory work.
              </p>
              <p>
                <strong>7.2 Limitation:</strong> In no event shall Naqvix be liable for indirect, incidental, 
                special, or consequential damages, including but not limited to loss of profits or data.
              </p>
              <p>
                <strong>7.3 Maximum Liability:</strong> Our total liability shall not exceed the total amount 
                paid by the client for the specific service giving rise to the claim.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Termination */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Termination</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>8.1 Termination Rights:</strong> Either party may terminate services with 30 days 
                written notice, subject to completion of ongoing projects and payment obligations.
              </p>
              <p>
                <strong>8.2 Immediate Termination:</strong> Services may be terminated immediately in case of 
                material breach, non-payment, or violation of confidentiality agreements.
              </p>
              <p>
                <strong>8.3 Post-Termination:</strong> Upon termination, all deliverables completed and paid 
                for will be transferred to the client, and confidentiality obligations will remain in effect.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Governing Law */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Governing Law</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>9.1 Jurisdiction:</strong> These Terms are governed by the laws of Pakistan. 
                Any disputes will be resolved through arbitration or courts in Lahore, Pakistan.
              </p>
              <p>
                <strong>9.2 Dispute Resolution:</strong> We encourage resolution of disputes through 
                direct negotiation. If unsuccessful, disputes will be resolved through binding arbitration.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Changes to Terms */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Changes to Terms</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                <strong>10.1 Modifications:</strong> Naqvix reserves the right to modify these Terms at any time. 
                Changes will be effective upon posting on our website.
              </p>
              <p>
                <strong>10.2 Notification:</strong> Significant changes will be communicated to active clients 
                via email or through our website notifications.
              </p>
              <p>
                <strong>10.3 Acceptance:</strong> Continued use of our services after changes constitutes 
                acceptance of the modified Terms.
              </p>
            </div>
          </GlassmorphismCard>

          {/* Contact Information */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Contact Information</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>Email:</strong> info@naqvix.com</p>
                <p><strong>Phone:</strong> +92 3222 777 414</p>
                <p><strong>Address:</strong> Plaza#289, First Floor, Q Block (Commercial Lane) DHA, Phase 2, Lahore</p>
              </div>
            </div>
          </GlassmorphismCard>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Naqvix. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;