const CallToAction = () => {
    return (
      <section className="py-16 px-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
        <p className="text-lg mb-8">
          Start your journey today by creating a campaign or supporting a cause
          that resonates with you.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded shadow-lg text-white">
            Create a Campaign
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded shadow-lg text-white">
            Support a Cause
          </button>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  