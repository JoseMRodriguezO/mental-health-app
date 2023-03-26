import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { useState } from "react";

export function Header() {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/journal_entries">
                  All Journals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/journal_entries/new">
                  New Journal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/moods/new">
                  New Mood
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/moods">
                  Mood
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
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                value={searchFilter}
                onChange={(event) => setSearchFilter(event.target.value)}
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
