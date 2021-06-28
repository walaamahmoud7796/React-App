import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritePage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/new-meetups">
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path="/favorites">
          <FavoritePage></FavoritePage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
