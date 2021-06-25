import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritePage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
  return (
    <div>
      <MainNavigation />
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
    </div>
  );
}

export default App;
