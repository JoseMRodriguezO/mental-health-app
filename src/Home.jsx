import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function Home() {
  const location = useLocation();
  const [activities, setActivities] = useState([]);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/activities/")
      .then((response) => {
        console.log("python", response);
        setActivities(response.data.activities);
      })
      .catch((error) => console.error(error));
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/positive_quotes`);
      setQuote(response.data.quote);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>TalkSafe</h1>
      </header>
      <main>
        <p>
          Introducing TalkSafe - the app that helps you share your emotions in a safe and supportive environment. With
          TalkSafe, you can connect with others who are going through similar experiences and share your thoughts and
          feelings without fear of judgement. Whether you're struggling with anxiety, depression, or just need someone
          to talk to, TalkSafe provides a platform for you to share your story and find comfort in a community of people
          who understand what you're going through. TalkSafe is more than just an app - it's a safe space where you can
          be yourself and get the support you need. Our app features chat rooms, discussion forums, and access to
          professional therapists who can provide expert guidance and support. Join the TalkSafe community today and
          start sharing your emotions in a safe and supportive environment. Together, we can help each other heal and
          overcome life's challenges.s{" "}
        </p>
        <div>
          <h2>Positive Quote of the Day:</h2>
          <p>{quote}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Signup Now!!
        </button>
      </main>
      <div>
        <h1>Activities and Resources</h1>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              <h2>{activity.title}</h2>
              <p>{activity.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
