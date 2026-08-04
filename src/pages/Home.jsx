import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="hero">
        <div className="emoji">
          🐠
        </div>
        <h1>
          Fishify Yourself
        </h1>
        <p>
          Discover your marine alter ego through a fun personality quiz.
        </p>
        <button
          onClick={() => navigate("/quiz")}
        >
          Start Quiz →
        </button>
      </div>
    </div>
  );
}
export default Home;
