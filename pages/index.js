import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Question1 from "./Components/Question1/Index";
import Question2 from "./Components/Question2";
import Question3 from "./Components/Question3";
import Question4 from "./Components/Question4";

let renderQuestion = {
  question1: <Question1 />,
  question2: <Question2 />,
  question3: <Question3 />,
  question4: <Question4 />,
};

export default function Home() {
  const [route, setRoute] = useState("");
  const { asPath } = useRouter();

  useEffect(() => {
    setRoute(asPath.slice(2));
  }, [asPath]);

  return (
    <div className="home">
      <Navbar />
      {renderQuestion[route]}
    </div>
  );
}
