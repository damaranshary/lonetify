import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setNewReleasesData, setNewReleasesTracksData } from "../../redux/slices/tracksSlice";
import { fetchAlbumTracksFromNewReleases, fetchNewReleasesData } from "../../api-call/fetchSpotifyAPI";
import Album from "../../components/Album";

const Home = () => {
  const newReleasesData = useAppSelector((state: RootState) => state.tracks.newReleasesData.value);
  const accessToken = useAppSelector((state: RootState) => state.accessToken.value);
  const userDisplayName = useAppSelector((state: RootState) => state.user.displayName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getNewReleasesData = async () => {
      accessToken !== undefined && (
        await fetchNewReleasesData(accessToken).then(res => {
          dispatch(setNewReleasesData(res));
        }));
    }
    accessToken !== undefined && getNewReleasesData();
  }, [accessToken, dispatch]);

  useEffect(() => {
    document.title = 'Home'
  })

  const handleGetNewReleasesTracks = async (id: string) => {
    if (accessToken !== undefined && id !== undefined) (
      await fetchAlbumTracksFromNewReleases(accessToken, id).then(res => {
        dispatch(setNewReleasesTracksData(res));
        console.log(res);
      }));
  }

  return (
    <div className='home'>
      <div className='home-container'>
        <div className='heading'>
          <h1> Welcome, {userDisplayName}</h1>
          <h2>New Releases</h2>
        </div>
        <Album
          newReleaseAlbum={newReleasesData}
          handleGetNewReleasesTracks={handleGetNewReleasesTracks} />
      </div>
    </div>
  )
}

export default Home;