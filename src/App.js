import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./redux/store";
import Body from "./components/body";
import { Provider, useDispatch, useSelector } from "react-redux";
import BestGamingEarbuds from "./components/Test";
import MainPage from "./components";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import ProfilePage from "./components/ProfilePage";
import Post from "./components/Post";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "*",
        element: <Body />,
      },
      {
        path: "/read",
        element: <BestGamingEarbuds />,
      },
    ],
  },
  {
    path: "/Signup",
    element: <SignUp />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/ProfilePage",
    element: <ProfilePage />,
  },
  {
    path: "/Post",
    element: <Post />,
  },
]);

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
