import {ImagePlus} from "lucide-react";
const Report = () => {
  return (
    <>
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Form Container */}
          <div className="bg-transparent border-2 px-5 py-5 rounded-2xl border-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 mb-10  text-center">
              Report From
            </h1>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Incident Description */}
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Incident Details
                    </h2>
                    <div className="bg-gray-50 p-4 rounded-xl ">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Describe Incident
                      </label>
                      <textarea
                        rows={5}
                        className="w-full rounded-xl bg-white shadow-sm transition-all text-sm border-gray-200 outline-none placeholder:text-gray-400 p-2"
                        placeholder="Describe what happened ?"
                        required
                      />
                    </div>
                  </div>

                  {/* Location Section */}
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Location Details
                    </h2>
                    <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <select
                          className="w-full rounded-xl bg-white shadow-sm transition-all text-sm border-gray-200 outline-none p-2 placeholder:text-gray-400"
                          required
                        >
                          <option value="">Select a city</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Detailed Address *
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-xl p-2 bg-white shadow-sm transition-all text-sm border-gray-200 outline-none placeholder:text-gray-400"
                          placeholder="Enter specific location"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Your Information
                    </h2>
                    <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                        {/* Reporter's Contact Info */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            className="w-full rounded-xl p-2 bg-white shadow-sm transition-all text-sm border-gray-200 outline-none placeholder:text-gray-400"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Contact Number
                          </label>
                          <input
                            type="tel"
                            className="w-full rounded-xl p-2 bg-white shadow-sm transition-all text-sm border-gray-200 outline-none placeholder:text-gray-400"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Notes
                        </label>
                        <textarea
                          rows={5}
                          className="w-full rounded-xl p-2 bg-white shadow-sm transition-all text-sm border-gray-200 outline-none placeholder:text-gray-400"
                          placeholder="Any other relevant information..."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Animal Information Section*/}
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Animal Details
                    </h2>
                    <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Animal Description *
                        </label>
                        <textarea
                          rows={5}
                          className="w-full rounded-xl p-2 bg-white shadow-sm transition-all text-sm border-gray-200 outline-none placeholder:text-gray-400"
                          placeholder="Describe the animal's condition"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Condition *
                          </label>
                          <select
                            className="w-full rounded-xl p-2 bg-white shadow-sm transition-all text-sm border-gray-200 outline-none placeholder:text-gray-400"
                            required
                          >
                            <option value="PENDING">Select Condition</option>
                            <option value="LOW">Low</option>
                            <option value="MODERATE">Moderate</option>
                            <option value="HIGH">High</option>
                            <option value="CRITICAL">Critical</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Condition Details *
                        </label>
                        <textarea
                          rows={5}
                          className="w-full rounded-xl p-3 bg-white shadow-sm transition-all text-sm border-gray-200 outline-none placeholder:text-gray-400"
                          placeholder="tell all details about Condition"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Photo Evidence Section */}
                  <div className="space-y-3">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Upload Evidence Photo
                    </h2>
                    <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                      <div>
                        <label
                          htmlFor="upload-photo"
                          className="min-h-[200px] flex flex-col justify-center items-center px-4 py-6 border-2 border-gray-200 border-dashed rounded-xl bg-white hover:border-teal-600 transition-colors cursor-pointer"
                        >
                          <div className="relative w-full h-full flex flex-col items-center">
                            {/* <img
                              alt="Preview"
                              className="max-h-[160px] object-contain mx-auto rounded-lg shadow-md"
                            /> */}
                            <div className="mt-4 text-sm text-gray-600">
                              Click to change image
                            </div>
                          </div>
                          <div className="text-center">
                            <ImagePlus className="mx-auto h-12 w-12 text-gray-400 mb-4 pt-5" />
                            <div className="text-sm text-gray-600 mb-2">
                              click to select
                            </div>
                            <p className="text-xs text-gray-500">
                              Image Size up to 5MB
                            </p>
                          </div>

                          <input
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                            accept="image/*"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex space-x-4 pt-5 mb-5">
                <button
                  type="submit"
                  className="flex-1 bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 font-medium"
                >
                  Submit Your Report
                </button>
                <button
                  type="button"
                  className="px-8 py-3 border-2 border-teal-600 hover:bg-gray-100 rounded-2xl font-medium "
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Report;
