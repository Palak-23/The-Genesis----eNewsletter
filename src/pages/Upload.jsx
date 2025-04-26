import Navbar from "../components/Navbar";

const Upload = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Upload Your Newsletter
        </h2>
        <input type="file" className="mt-4 border p-2 rounded-md" />
        <button className="block bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
