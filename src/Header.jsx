import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { useState } from "react";
export function Header() {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <header>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <div className="navbar-brand navbar-logo">
          TalkSafe
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fas fa-bars text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <div class="hori-selector">
                <div class="left"></div>
                <div class="right"></div>
              </div>
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/journal_entries">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/journal_entries/new">
                  New Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/moods/new">
                  New Mood
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/moods">
                  Feelings Tracking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chat">
                  Safe one
                </Link>
              </li>

              <li className="nav-item">
                {localStorage.jwt === undefined ? (
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                ) : null}{" "}
              </li>
              <li className="nav-item">
                {localStorage.jwt === undefined ? (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                ) : null}{" "}
              </li>

              <li className="nav-item">
                {localStorage.jwt !== undefined ? <LogoutLink className="nav-link" /> : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
