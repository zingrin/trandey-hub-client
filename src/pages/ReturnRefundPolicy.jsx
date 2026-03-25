import React from "react";

export default function ReturnRefundPolicy() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Return & Refund Policy</h1>

      <p className="mb-4 text-gray-700">
        At Trendy Products Hub, we want you to be completely satisfied with your
        purchase. Please read our Return & Refund Policy carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Returns</h2>
      <p className="text-gray-700 mb-4">
        Products can be returned within 7 days of delivery if they are
        defective, damaged, or incorrect. Items must be unused and in original
        packaging.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Refunds</h2>
      <p className="text-gray-700 mb-4">
        Refunds will be processed within 5-7 business days after receiving the
        returned item. Refunds are issued to the original payment method.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Exceptions</h2>
      <p className="text-gray-700 mb-4">
        Customized products or perishable goods may not be eligible for return
        unless defective or damaged.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        For return requests or inquiries, contact{" "}
        <span className="text-red-500">support@trendyhub.com</span>.
      </p>
    </div>
  );
}
