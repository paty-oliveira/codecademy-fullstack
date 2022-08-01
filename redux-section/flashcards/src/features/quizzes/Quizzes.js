import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import ROUTES from "../../app/routes";
import { selectQuizzes } from "./quizzesSlice";

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes);
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
