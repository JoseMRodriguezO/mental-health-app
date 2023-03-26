import React from "react";
import { useLocation } from "react-router-dom";

export function Home() {
  const location = useLocation();
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
        <button type="submit" className="btn btn-primary">
          Signup Now!!
        </button>
      </main>
    </div>
  );
}
