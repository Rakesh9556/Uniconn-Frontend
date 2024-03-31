import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <header className="p-4 flex justify-end">
        <Link to="/registration">
          <button>Create account</button>
        </Link>
      </header>
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">UNICONN— A SOCIAL MEDIA SITE FOR UNIVERSITY</h1>
        <p className="text-lg mb-4">
          Developing a university-focused social networking platform facilitating student connections, information exchange, and collaboration.
        </p>
        <p className="text-lg mb-4">
          Our platform will aim to replace outdated email culture and simplify information management for students, faculty, and college staff.
        </p>
        <p className="text-lg mb-4">
          Ensuring that students never miss vital information or notifications from college authorities also brings students together, making it simpler to share resources, connect with others, and work together.
        </p>
      </main>
      <footer className="p-4">
      <Link to="/registration">
          <button>Create account</button>
     </Link>
      </footer>
    </div>
  );
};

export default Welcome;
