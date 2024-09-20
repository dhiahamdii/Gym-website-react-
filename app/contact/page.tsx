// app/contact/contact.tsx
export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            required
            className="w-full border rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md p-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
