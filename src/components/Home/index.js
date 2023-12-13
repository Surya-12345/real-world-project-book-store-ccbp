import React from "react";
import "./index.css";
import Header from "../Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <div>
          <h1 className="main-heading">Welcome to Crossword!</h1>
          <p className="main-para">
            Explore the world of literature at our bookstore, where stories come
            to life and imaginations flourish. We take pride in offering a
            diverse collection of books that cater to every reader's taste. From
            timeless classics to contemporary bestsellers, our shelves are
            brimming with literary treasures waiting to be discovered.
          </p>
          <Link to='/books' className="nav-link" >Visit The Store</Link>
        </div>
        <div>
          <h1 className="heading">Discover a World of Books:</h1>
          <ul>
            <li>
              <h1 className="list-heading">Fiction</h1>
              <hr className="hr" />
              <p className="list-des">
                Immerse yourself in captivating narratives and explore new
                worlds through our extensive fiction collection. From romance to
                science fiction, there's a story for every reader.
              </p>
            </li>
            <li>
              <h1 className="list-heading">Non-Fiction</h1>
              <hr className="hr" />
              <p className="list-des">
                Expand your knowledge with our thought-provoking non-fiction
                titles. Delve into topics ranging from history and science to
                self-improvement and biographies.
              </p>
            </li>
            <li>
              <h1 className="list-heading">Children's Corner</h1>
              <hr className="hr" />
              <p className="list-des">
                Nurture a love for reading from a young age with our enchanting
                children's books. Spark their imagination and curiosity with
                colorful tales and educational adventures.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="sep-heading">Stay Connected</h3>
          <p className="sep-para">
            Follow us on social media and subscribe to our newsletter to stay
            updated on the latest arrivals, book recommendations, and exclusive
            offers. Join our community of fellow book enthusiasts! <br />{" "}
            username in all platforms is <span className="usernames">@crosswordbookstores</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
