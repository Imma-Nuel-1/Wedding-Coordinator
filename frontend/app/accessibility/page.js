export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Web Accessibility</h1>
      <p className="mb-4">
        We are committed to ensuring Nigeria Wedding Coordinator is accessible
        to everyone, regardless of ability.
      </p>
      <p className="mb-4">
        Our site aims to meet WCAG 2.1 AA standards and is regularly reviewed
        for accessibility improvements.
      </p>
      <p>
        Found an issue? Contact us at{" "}
        <a
          href="mailto:accessibility@wedding.ng"
          className="text-blue-600 underline"
        >
          accessibility@wedding.ng
        </a>
        .
      </p>
    </div>
  );
}
