import "./App.css"
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from './firebase';
import { setUser } from './slices/userSlice';
import { useDispatch } from 'react-redux';
import PrivateRoutes from './components/Common/PrivateRoutes';
import CreateAPodcastPage from './pages/CreateAPodcast';
import PodacstsPage from './pages/Podcasts';
import PodcastsDetailsPage from './pages/PodcastDetails';
import CreateAnEpisodePage from './pages/CreateAnEpisode';
import SignUpPage from "./pages/SignUpPage";

function App() { 

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsubscribeSnapshot = onSnapshot(
          doc(db, "users", user.uid),
          (userDoc) => {
            if (userDoc.exists()) {
              const userData = userDoc.data();
              dispatch(
                setUser({
                  name: userData.name,
                  email: userData.email,
                  uid: user.uid,
                  profileImage: userData.profileImage,
                })
              );
            }
          },
          (error) => {
            console.error("Error fetching user data:", error);
          }
        );

        return () => {
          unsubscribeSnapshot();
        };
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, []);
  
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-a-podcast" element={<CreateAPodcastPage />} />
          <Route path="/podcasts" element={<PodacstsPage />} />
          <Route path="/podcast/:id" element={<PodcastsDetailsPage />} />
          <Route path="/podcast/:id/create-episode" element={<CreateAnEpisodePage />}
            />
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
