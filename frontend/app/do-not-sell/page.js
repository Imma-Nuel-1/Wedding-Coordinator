export default function DoNotSellPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        Do Not Sell or Share My Personal Information
      </h1>
      <p className="mb-4">
        Under applicable privacy laws such as the CCPA (California Consumer
        Privacy Act), you have the right to opt out of the sale or sharing of
        your personal information.
      </p>
      <p className="mb-4">
        Wedding Coordinator Marketplace does not sell your personal information
        to third parties. We only use data to improve your experience and our
        services. However, if you would still like to make a formal request,
        please contact us at:
      </p>
      <p className="mb-4 font-medium">support@weddingcoordinator.ng</p>
      <p>
        For more information about how we collect and use data, please review
        our{" "}
        <a
          href="/privacy"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
