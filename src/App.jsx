import './App.css';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import TopPage from "./pages/TopPage";
import ArticlePage from "./pages/ArticlePage";
import DetailPage from "./pages/DetailPage";


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <div className="link-list">
          <div className="links">
            <Link className="link" to="/">トップ</Link>
            <Link className="link" to="/articlepage">記事一覧</Link>
            <Link className="link" to="/detailpage">記事詳細へ</Link>
          </div>
          <Switch>
              <Route exact path="/">
                  <TopPage />
              </Route>
              <Route path="/articlepage">
                  <ArticlePage />
              </Route>
              <Route path="/detailpage">
                  <DetailPage />
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
