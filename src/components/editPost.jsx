

const EditPost = () => {

    return (
      <form className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Description:</label>
          <textarea
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Categories:</label>
          <input
            type="text"
            name="categories"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">File:</label>
          <input
            type="file"
            name="file"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    );
  }
  
  export default EditPost;
  