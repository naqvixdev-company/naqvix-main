import UHeading from '@/utils/UHeading';
import GlassmorphismCard from '@/utils/GlassmorphismCard';

export const metadata = {
  title: 'Delivery & Termination Policy | NaqviX',
  description: 'NaqviX service delivery conditions, timelines, and termination policies for local and international clients. Learn about our delivery process, cancellation terms, and service completion guidelines.',
};

const DeliveryTermination = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0E0E] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <UHeading text={'DELIVERY & TERMINATION POLICY'} />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Clear guidelines for service delivery, timelines, and termination conditions
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service Delivery Overview</h2>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              NaqviX is committed to delivering high-quality business solutions including BPO/KPO services, 
              AI solutions, marketing, development, finance & accounting, data analytics, automation & RPA, 
              and consulting services to clients both locally in Pakistan and internationally.
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              This policy outlines our delivery conditions, timelines, cancellation procedures, and termination 
              terms to ensure transparency and mutual understanding between NaqviX and our valued clients.
            </p>
          </GlassmorphismCard>

          {/* Service Delivery Conditions */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service Delivery Conditions</h2>
            
            <div className="space-y-6">
              {/* Local Delivery */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">Local Delivery (Pakistan)</h3>
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <h4 className="font-semibold mb-2">Service Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Primary coverage: Lahore, Karachi, Islamabad, Rawalpindi</li>
                      <li>Secondary coverage: Faisalabad, Multan, Peshawar, Quetta</li>
                      <li>Remote areas: Available via digital delivery methods</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Delivery Methods:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>On-site consultation and implementation (major cities)</li>
                      <li>Digital delivery via secure platforms</li>
                      <li>Hybrid approach combining remote and on-site services</li>
                      <li>24/7 technical support and maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* International Delivery */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">International Delivery</h3>
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <div>
                    <h4 className="font-semibold mb-2">Global Coverage:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Primary markets: USA, Canada, UK, Australia, UAE</li>
                      <li>European Union countries with GDPR compliance</li>
                      <li>Asia-Pacific region including Singapore, Malaysia</li>
                      <li>Other regions upon request and feasibility assessment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">International Delivery Methods:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>100% remote delivery via secure digital platforms</li>
                      <li>Video conferencing for consultations and meetings</li>
                      <li>Cloud-based project management and collaboration</li>
                      <li>Time zone-adjusted support (business hours alignment)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Service Delivery Timelines */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service Delivery Timelines</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* BPO/KPO Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BPO/KPO Services</h3>
                <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <div className="flex justify-between">
                    <span>Setup & Onboarding:</span>
                    <span className="font-medium">3-7 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Standard Operations:</span>
                    <span className="font-medium">Ongoing (24/7)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reporting Delivery:</span>
                    <span className="font-medium">Daily/Weekly</span>
                  </div>
                </div>
              </div>

              {/* AI Solutions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Solutions</h3>
                <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <div className="flex justify-between">
                    <span>Consultation & Analysis:</span>
                    <span className="font-medium">5-10 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Development & Testing:</span>
                    <span className="font-medium">2-8 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deployment & Training:</span>
                    <span className="font-medium">1-2 weeks</span>
                  </div>
                </div>
              </div>

              {/* Marketing Solutions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing Solutions</h3>
                <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <div className="flex justify-between">
                    <span>Strategy Development:</span>
                    <span className="font-medium">7-14 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Campaign Launch:</span>
                    <span className="font-medium">3-5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Reports:</span>
                    <span className="font-medium">1st week of month</span>
                  </div>
                </div>
              </div>

              {/* Development Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Development Services</h3>
                <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <div className="flex justify-between">
                    <span>Requirements Analysis:</span>
                    <span className="font-medium">3-7 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Development Phase:</span>
                    <span className="font-medium">4-16 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Testing & Deployment:</span>
                    <span className="font-medium">1-3 weeks</span>
                  </div>
                </div>
              </div>

              {/* Finance & Accounting */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Finance & Accounting</h3>
                <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <div className="flex justify-between">
                    <span>Setup & Integration:</span>
                    <span className="font-medium">5-10 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Closing:</span>
                    <span className="font-medium">5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Reports:</span>
                    <span className="font-medium">15-30 business days</span>
                  </div>
                </div>
              </div>

              {/* Data Analytics */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Analytics</h3>
                <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <div className="flex justify-between">
                    <span>Data Assessment:</span>
                    <span className="font-medium">3-5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dashboard Development:</span>
                    <span className="font-medium">1-3 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Regular Reports:</span>
                    <span className="font-medium">Weekly/Monthly</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Cancellation Policy */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cancellation Policy</h2>
            
            <div className="space-y-6">
              <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-4">Cancellation Rights & Conditions</h3>
                <div className="space-y-4 text-gray-800 dark:text-gray-200">
                  <p>
                    <strong>Yes, we allow cancellations</strong> under specific conditions and timelines outlined below:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">Before Service Commencement</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Full refund:</strong> 48+ hours before start date</li>
                        <li>• <strong>75% refund:</strong> 24-48 hours before start</li>
                        <li>• <strong>50% refund:</strong> Less than 24 hours before start</li>
                        <li>• <strong>No refund:</strong> After service commencement</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">After Service Commencement</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Ongoing services:</strong> 30-day notice required</li>
                        <li>• <strong>Project-based:</strong> Milestone-based cancellation</li>
                        <li>• <strong>Completed work:</strong> Payment due for delivered portions</li>
                        <li>• <strong>Consultation services:</strong> Non-refundable after delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cancellation Process */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">How to Cancel Services</h3>
                <div className="space-y-3 text-gray-800 dark:text-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">1</div>
                    <div>
                      <p><strong>Submit Written Notice:</strong> Email cancellation@naqvix.com or info@naqvix.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">2</div>
                    <div>
                      <p><strong>Include Required Information:</strong> Account details, service type, reason for cancellation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">3</div>
                    <div>
                      <p><strong>Confirmation:</strong> We'll acknowledge within 24 hours and process within 3-5 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">4</div>
                    <div>
                      <p><strong>Refund Processing:</strong> Eligible refunds processed within 7-14 business days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Service Termination */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service Termination Conditions</h2>
            
            <div className="space-y-6">
              {/* Client-Initiated Termination */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Client-Initiated Termination</h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="space-y-3 text-gray-800 dark:text-gray-200">
                    <p><strong>Notice Period:</strong> 30 days written notice for ongoing services</p>
                    <p><strong>Project Termination:</strong> Allowed at milestone completion points</p>
                    <p><strong>Final Deliverables:</strong> All completed work delivered within 7 business days</p>
                    <p><strong>Data Transfer:</strong> Client data transferred securely within 14 business days</p>
                    <p><strong>Outstanding Payments:</strong> All dues must be settled before termination</p>
                  </div>
                </div>
              </div>

              {/* NaqviX-Initiated Termination */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">NaqviX-Initiated Termination</h3>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="space-y-3 text-gray-800 dark:text-gray-200">
                    <p><strong>Breach of Contract:</strong> Immediate termination for material breach</p>
                    <p><strong>Non-Payment:</strong> 15 days notice for payment defaults</p>
                    <p><strong>Scope Changes:</strong> 30 days notice for significant scope modifications</p>
                    <p><strong>Business Reasons:</strong> 60 days notice for strategic business decisions</p>
                    <p><strong>Refund Policy:</strong> Pro-rated refunds for prepaid unused services</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Special Conditions */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Special Conditions & Exceptions</h2>
            
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <div>
                <h3 className="text-lg font-semibold mb-2">Force Majeure Events</h3>
                <p className="text-sm mb-3">
                  Service delivery may be affected by events beyond our control including natural disasters, 
                  government regulations, internet outages, or global pandemics. In such cases:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>Service timelines may be extended without penalty</li>
                  <li>Alternative delivery methods will be explored</li>
                  <li>Clients will be notified within 24 hours of any delays</li>
                  <li>Compensation or service credits may be provided at our discretion</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">International Compliance</h3>
                <p className="text-sm mb-3">
                  For international clients, additional conditions may apply:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>Compliance with local data protection laws (GDPR, CCPA, etc.)</li>
                  <li>Currency exchange rate fluctuations may affect pricing</li>
                  <li>Time zone differences may impact real-time support availability</li>
                  <li>Local holidays and business practices will be respected</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                <p className="text-sm mb-3">
                  If delivered services do not meet agreed quality standards:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                  <li>Free revision and correction within 30 days of delivery</li>
                  <li>Partial refund for unresolved quality issues</li>
                  <li>Service credit for future projects</li>
                  <li>Escalation to senior management for resolution</li>
                </ul>
              </div>
            </div>
          </GlassmorphismCard>

          {/* Contact Information */}
          <GlassmorphismCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-200">
              <p>
                For questions about delivery, cancellation, or termination policies, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p><strong>Company:</strong> NaqviX</p>
                <p><strong>General Email:</strong> info@naqvix.com</p>
                <p><strong>Cancellation Email:</strong> cancellation@naqvix.com</p>
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
          <p className="text-sm mt-2">This policy is effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and may be updated periodically.</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTermination;