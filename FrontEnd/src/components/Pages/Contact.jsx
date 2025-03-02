const Contact = () => {
  return (
    <>
      <section className="min-h-screen pt-20">
        <section className="pb-15 ">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Contact Us !
              </h1>
              <p className="text-lg text-gray-600">
                We'd love to hear from you! Fill out the form below.
              </p>
            </div>
          </div>
        </section>
        <div className="max-w-2xl mx-auto shadow-lg">
          <form className="bg-white rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 shadow-xs"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 shadow-xs"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 shadow-xs"
                placeholder="Message subject"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600"
                placeholder="Your message"
              ></textarea>
            </div>
            <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
