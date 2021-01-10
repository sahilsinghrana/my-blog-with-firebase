import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import firebase from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import BlogListPage from "./pages/BlogListPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import "./css/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="body">
          <Switch>
            <Route path="/blog" component={BlogListPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/" component={HomePage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
