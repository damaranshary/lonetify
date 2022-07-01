import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import queryString from 'query-string';
import { setAccessToken } from "../../redux/slices/accessTokenSlice";
import { getfullURI } from '../../utils/getFullUrl';

const Auth = () => {
  const accessToken = useAppSelector((state: any) => state.accessToken.value)
  const dispatch = useAppDispatch();
  const history = useHistory();
  const url = getfullURI();

  useEffect(() => {
    const parsed = queryString.parse(window.location.hash);
    dispatch(setAccessToken(parsed.access_token));
  }, [accessToken, dispatch])

  useEffect(() => {
    accessToken !== undefined && (
      history.push("home")
    )
  }, [accessToken, history])

  return (
    <div className="auth">
      <div className='auth children'>
        <div className='hahaha'>
          <h1> Welcome to Lonetify!</h1>
          <a href={url}>
            <button className="btn unselected">Login with Spotify</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Auth;