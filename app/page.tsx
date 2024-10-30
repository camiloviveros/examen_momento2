
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center p-8">
      <div className="bg-black rounded-lg shadow-lg flex max-w-3xl w-full p-6">
        <div className="flex-shrink-0">
          <Image
            className="rounded-full w-24 h-24 object-cover"
            src="/image/imagen_examen_momento2.jpg" // Ruta de tu imagen
            alt="Profile Picture"
            width={96}
            height={96}
          />
        </div>
        <div className="ml-6 flex flex-col justify-between">
          <div>
            <h2 className="text-white text-xl font-bold">Jess Wilson</h2>
            <p className="text-gray-400">UX Engineer</p>
            <p className="text-gray-300 mt-2">
              Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            <button className="bg-gray-700 text-white rounded-full px-4 py-2 hover:bg-gray-600 transition">
              Profile
            </button>
            <button className="bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-500 transition">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
