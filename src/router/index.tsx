import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import CreatePlaylist from "../pages/CreatePlaylist";
import Search from "../pages/Search";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const AppRouter = () => {
    const accessToken = useAppSelector((state: RootState) => state.accessToken.value);
    return (
        < Router >
            <Switch>
                <Route path="/" component={Auth} exact />
                <>
                    {accessToken !== undefined && <Navbar />}
                    <Route path="/create-playlist" exact>
                        {accessToken !== undefined ?
                            <CreatePlaylist /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/search" exact>
                        {accessToken !== undefined ?
                            <Search /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/home" exact>
                        {accessToken !== undefined ?
                            <Home /> : <Redirect to="/" />}
                    </Route>
                    <Route path="*" component={() => (<h1>404</h1>)} />
                </>
            </Switch>
        </Router >
    )
}

export default AppRouter;