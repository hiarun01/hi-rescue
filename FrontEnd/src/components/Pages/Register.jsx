const Register = () => {
  return (
    <>
      {/* User Create Account Section */}
      <section className="min-h-screen pt-20">
        <div className="max-w-2xl mx-auto rounded-lg p-4 shadow-lg">
          <form className="bg-white p-5 ">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="Firstname">
                  First Name
                </label>
                <input
                  type="text"
                  id="Fname"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 shadow-xs"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="Last Name">
                  Last Name
                </label>
                <input
                  type="text"
                  id="Lname"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 shadow-xs"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="Mobile Number"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="Mnumber"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 shadow-xs"
                  placeholder="Mobile Number"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="Email Address"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 shadow-xs"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="mb-10">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="Enter Your Address"
              >
                Your Address
              </label>
              <input
                type="text"
                id="Address"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 shadow-xs"
                placeholder="Enter Your Full Address"
              />
            </div>

            <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
              Create Account
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
