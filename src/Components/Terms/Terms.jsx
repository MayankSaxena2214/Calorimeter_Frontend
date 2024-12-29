import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Terms and Conditions</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Calorimeter! These terms and conditions outline the rules and regulations for using our application. By accessing this application, we assume you accept these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Usage of the Application</h2>
        <p className="text-gray-700 mb-4">
          The application is designed for personal use to track food and calorie information. You are not allowed to misuse the application by introducing harmful elements such as viruses or unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Data Privacy</h2>
        <p className="text-gray-700 mb-4">
          Your data privacy is important to us. We collect and use your data in accordance with our Privacy Policy. Please read our Privacy Policy to understand how we handle your data.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          Calorimeter is provided "as is" without any guarantees or warranties. We are not responsible for any inaccuracies or errors in the data provided by the application.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Changes to the Terms</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to update these terms and conditions at any time. You are advised to review this page periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about these terms, please contact us at <a href="mailto:support@calorimeter.com" className="text-blue-500">support@calorimeter.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Terms;
