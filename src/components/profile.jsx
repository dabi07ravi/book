

const ProfileForm = () => {

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile Information</h2>
      <form className="mb-4">
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Username:</label>
          <input
            type="text"
            name="username"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
      </form>
      <div className="flex justify-between">
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Update
        </button>
        <button
          type="button"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProfileForm;
