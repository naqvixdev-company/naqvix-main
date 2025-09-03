import UHeading from '@/utils/UHeading';
import GlassmorphismCard from '@/utils/GlassmorphismCard';

export const metadata = {
  title: 'Refund Policy | NaqviX',
  description: 'NaqviX refund, return, and exchange policy for all business services. Learn about our refund conditions, turnaround times, and process for BPO/KPO, AI solutions, marketing, development, and consulting services.',
};

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0E0E] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <UHeading text={'REFUND POLICY'} />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Transparent refund, return, and exchange conditions for all our services
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Refund Commitment</h2>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              At NaqviX, we stand behind the quality of our business solutions including BPO/KPO services, 
              AI solutions, marketing, development, finance & accounting, data analytics, automation & RPA, 
              and consulting services. We are committed to customer satisfaction and offer fair refund policies.
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              This policy outlines the conditions for refunds, returns, exchanges, and the mandatory turnaround 
              times for processing refund requests to ensure transparency and customer confidence.
            </p>
          </GlassmorphismCard>

          {/* Refund Eligibility */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Refund Eligibility Conditions</h2>
            
            <div className="space-y-6">
              {/* Service-Based Refund Conditions */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">Eligible for Full Refund</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Before Service Commencement</h4>
                    <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <li>• Cancellation 48+ hours before start date</li>
                      <li>• Service not yet initiated or delivered</li>
                      <li>• No resources allocated to the project</li>
                      <li>• Client-initiated cancellation requests</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Service Quality Issues</h4>
                    <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <li>• Deliverables not meeting agreed specifications</li>
                      <li>• Service quality below industry standards</li>
                      <li>• Failure to deliver within agreed timelines</li>
                      <li>• Technical issues preventing service delivery</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Partial Refund Conditions */}
              <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-4">Eligible for Partial Refund</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Timeline-Based Refunds</h4>
                    <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <li>• 75% refund: 24-48 hours before start</li>
                      <li>• 50% refund: Less than 24 hours before start</li>
                      <li>• 25% refund: After service commencement</li>
                      <li>• Pro-rated refund for ongoing services</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Project-Based Refunds</h4>
                    <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <li>• Milestone-based refund calculation</li>
                      <li>• Refund for undelivered project phases</li>
                      <li>• Partial completion compensation</li>
                      <li>• Scope reduction adjustments</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Non-Refundable Services */}
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-4">Non-Refundable Services</h3>
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <ul className="space-y-1 text-sm">
                    <li>• Consultation services already delivered</li>
                    <li>• Custom development work completed and delivered</li>
                    <li>• Marketing campaigns already launched</li>
                    <li>• Data analytics reports already provided</li>
                    <li>• Training sessions already conducted</li>
                    <li>• Third-party software licenses purchased</li>
                    <li>• Services terminated due to client breach of contract</li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Service-Specific Refund Policies */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service-Specific Refund Policies</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* BPO/KPO Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BPO/KPO Services</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                    <p><strong>Setup Phase:</strong> Full refund if cancelled before onboarding</p>
                    <p><strong>Ongoing Operations:</strong> 30-day notice, pro-rated refund</p>
                    <p><strong>Performance Issues:</strong> Service credits or partial refunds</p>
                    <p><strong>Data Processing:</strong> Refund for unprocessed data only</p>
                  </div>
                </div>
              </div>

              {/* AI Solutions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Solutions</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                    <p><strong>Consultation Phase:</strong> Full refund if not satisfied</p>
                    <p><strong>Development Phase:</strong> Milestone-based refunds</p>
                    <p><strong>Implementation:</strong> Performance-based refund policy</p>
                    <p><strong>Training & Support:</strong> Pro-rated refund for unused hours</p>
                  </div>
                </div>
              </div>

              {/* Marketing Solutions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing Solutions</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                    <p><strong>Strategy Development:</strong> Full refund if not approved</p>
                    <p><strong>Campaign Management:</strong> Refund for unused ad spend</p>
                    <p><strong>Content Creation:</strong> Refund for undelivered content</p>
                    <p><strong>Performance Marketing:</strong> ROI-based refund consideration</p>
                  </div>
                </div>
              </div>

              {/* Development Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Development Services</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                    <p><strong>Planning Phase:</strong> Full refund if project cancelled</p>
                    <p><strong>Development Phase:</strong> Refund for incomplete features</p>
                    <p><strong>Testing Phase:</strong> Refund if critical bugs unfixed</p>
                    <p><strong>Deployment:</strong> Refund for deployment failures</p>
                  </div>
                </div>
              </div>

              {/* Finance & Accounting */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Finance & Accounting</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                    <p><strong>Bookkeeping:</strong> Refund for unprocessed periods</p>
                    <p><strong>Financial Reports:</strong> Refund for inaccurate reports</p>
                    <p><strong>Tax Services:</strong> Refund if filing errors occur</p>
                    <p><strong>Payroll Processing:</strong> Refund for processing errors</p>
                  </div>
                </div>
              </div>

              {/* Consulting Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Consulting Services</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                    <p><strong>Strategic Consulting:</strong> Satisfaction-based refund policy</p>
                    <p><strong>Implementation Support:</strong> Results-based refunds</p>
                    <p><strong>Training Programs:</strong> Refund for unattended sessions</p>
                    <p><strong>Ongoing Advisory:</strong> Pro-rated monthly refunds</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Refund Processing Timeline */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mandatory Refund Processing Timeline</h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Guaranteed Processing Times</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">24h</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Request Acknowledgment</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Refund request received and acknowledged</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3d</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Initial Review</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Eligibility assessment and documentation review</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">7d</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Decision Communication</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Refund approval or denial notification</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">10d</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Refund Processing</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Approved refunds initiated to original payment method</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">14d</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Maximum Timeline</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Complete refund process including bank processing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm">21d</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Complex Cases</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">International transfers or disputed cases</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-800/30 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Guarantee:</strong> All eligible refunds will be processed within 14 business days. 
                  If processing takes longer due to banking or international transfer delays, we will provide 
                  regular updates and expedite the process wherever possible.
                </p>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Returns and Exchanges */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Returns and Exchanges</h2>
            
            <div className="space-y-6">
              {/* Service Returns */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Service Returns</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-800 dark:text-gray-200 mb-3">
                    Since our services are intangible, traditional "returns" don't apply. However, we offer:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                    <li>• <strong>Service Revision:</strong> Free revisions for deliverables not meeting specifications</li>
                    <li>• <strong>Service Replacement:</strong> Alternative service delivery methods if original approach fails</li>
                    <li>• <strong>Service Credits:</strong> Credits for future services in case of performance issues</li>
                    <li>• <strong>Service Termination:</strong> Early termination with pro-rated refunds</li>
                  </ul>
                </div>
              </div>

              {/* Service Exchanges */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Service Exchanges</h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-800 dark:text-gray-200 mb-3">
                    We offer service exchanges under specific conditions:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Eligible for Exchange</h4>
                      <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                        <li>• Service scope changes before delivery</li>
                        <li>• Technology platform changes</li>
                        <li>• Service tier upgrades or downgrades</li>
                        <li>• Timeline adjustments</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Exchange Conditions</h4>
                      <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                        <li>• Must be requested before 25% completion</li>
                        <li>• Price difference adjustment required</li>
                        <li>• New timeline agreement needed</li>
                        <li>• Written confirmation required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Refund Request Process */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Request a Refund</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">Step-by-Step Process</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Submit Refund Request</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Email refunds@naqvix.com or info@naqvix.com with "REFUND REQUEST" in subject line
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Provide Required Information</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Include account details, service information, reason for refund, and supporting documentation
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Review and Assessment</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our team will review your request and assess eligibility within 3 business days
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Decision and Processing</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Receive decision notification and refund processing (if approved) within 7-14 business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Information */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Required Information for Refund Request</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Account Information</h4>
                    <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <li>• Full name and contact details</li>
                      <li>• Account or invoice number</li>
                      <li>• Original payment method details</li>
                      <li>• Service agreement reference</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Refund Details</h4>
                    <ul className="space-y-1 text-sm text-gray-800 dark:text-gray-200">
                      <li>• Service type and description</li>
                      <li>• Reason for refund request</li>
                      <li>• Supporting documentation</li>
                      <li>• Preferred refund method</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Special Circumstances */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Special Circumstances</h2>
            
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <div>
                <h3 className="text-lg font-semibold mb-2">Force Majeure Events</h3>
                <p className="text-sm mb-2">
                  In case of events beyond our control (natural disasters, government regulations, pandemics):
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>Full refunds available for undelivered services</li>
                  <li>Service credits offered for delayed deliveries</li>
                  <li>Flexible rescheduling without penalties</li>
                  <li>Extended refund processing times may apply</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">International Clients</h3>
                <p className="text-sm mb-2">
                  Additional considerations for international refunds:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>Currency exchange rates at time of refund processing</li>
                  <li>International banking fees may be deducted</li>
                  <li>Extended processing times (up to 21 business days)</li>
                  <li>Compliance with local financial regulations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Dispute Resolution</h3>
                <p className="text-sm mb-2">
                  If you disagree with our refund decision:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>Escalate to senior management via escalation@naqvix.com</li>
                  <li>Provide additional evidence or documentation</li>
                  <li>Request mediation through our complaints cell</li>
                  <li>Seek resolution through applicable consumer protection agencies</li>
                </ul>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Contact Information */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                For refund requests, questions, or assistance with our refund policy:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>Company:</strong> NaqviX</p>
                <p><strong>Refunds Email:</strong> refunds@naqvix.com</p>
                <p><strong>General Email:</strong> info@naqvix.com</p>
                <p><strong>Phone:</strong> +92 3222 777 414</p>
                <p><strong>Address:</strong> Plaza#289, First Floor, Q Block (Commercial Lane) DHA, Phase 2, Lahore</p>
                <p><strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM (PKT)</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For refund requests, please include "REFUND REQUEST" in the email subject line for faster processing.
              </p>
            </div>
          </GlassmorphismCard>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} NaqviX. All rights reserved.</p>
          <p className="text-sm mt-2">
            This refund policy is effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} 
            and supersedes all previous versions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;