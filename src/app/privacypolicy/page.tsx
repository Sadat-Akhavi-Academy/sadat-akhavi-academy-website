import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Sadat Akhavi Academy',
  description: 'Privacy Policy for Sadat Akhavi Academy applications and services',
}

export default function PrivacyPolicyPage() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      margin: 0,
      padding: '20px',
      backgroundColor: '#f9f9f9',
      color: '#333'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: 'auto',
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{color: '#0056b3'}}>Privacy Policy</h1>
        <p>Thank you for using Sadat Akhavi Academy (&quot;the App&quot;). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our App.</p>
        
        <h2 style={{color: '#0056b3'}}>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> When you create an account, we may collect your name, email address, and other details necessary for account creation and management.</li>
          <li><strong>Device Information:</strong> Information about the devices connected to the App via Bluetooth, Wi-Fi, or other wireless technologies.</li>
          <li><strong>Usage Information:</strong> Data about how you interact with the App, such as features used and session duration.</li>
          <li><strong>Location Information (if applicable):</strong> With your consent, we may collect your location data to enable certain features of the App.</li>
        </ul>
        
        <h2 style={{color: '#0056b3'}}>2. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>To enable communication between the App and connected devices.</li>
          <li>To improve the functionality and user experience of the App.</li>
          <li>To troubleshoot technical issues and provide customer support.</li>
          <li>To comply with legal requirements and prevent misuse of the App.</li>
        </ul>
        
        <h2 style={{color: '#0056b3'}}>3. Wireless Technologies</h2>
        <p>The App uses Bluetooth, Wi-Fi, and other wireless technologies to:</p>
        <ul>
          <li>Connect with devices you own and operate.</li>
          <li>Facilitate the transfer of data to perform the functions required by your connected devices.</li>
        </ul>
        
        <h2 style={{color: '#0056b3'}}>4. Sharing Your Information</h2>
        <p>We do not sell or share your personal information with third parties except:</p>
        <ul>
          <li>When required by law or to protect our legal rights.</li>
          <li>With trusted service providers who assist in maintaining and improving the App, bound by strict confidentiality agreements.</li>
        </ul>
        
        <h2 style={{color: '#0056b3'}}>5. Data Security</h2>
        <p>We use industry-standard measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or wireless technology is completely secure, so we cannot guarantee absolute security.</p>
        
        <h2 style={{color: '#0056b3'}}>6. Your Choices</h2>
        <p>You can control permissions for Bluetooth, Wi-Fi, and location access in your device settings.</p>
        
        <h2 style={{color: '#0056b3'}}>7. Third-Party Services</h2>
        <p>The App may integrate with third-party services to enhance functionality. These services operate independently, and we are not responsible for their privacy practices. Please review their privacy policies.</p>
        
        <h2 style={{color: '#0056b3'}}>8. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for updates.</p>
        
        <h2 style={{color: '#0056b3'}}>Acknowledgment</h2>
        <p>By using the Sadat Akhavi Academy App, you acknowledge that you have read and understood this Privacy Policy.</p>
      </div>
    </div>
  )
}
