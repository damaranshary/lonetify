import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserID, setUserDisplayName, setImgSrc } from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store";
import { fetchUserData } from "../../api-call/fetchSpotifyAPI";

const Profile = () => {
    const accessToken = useAppSelector((state: RootState) => state.accessToken.value);
    const userDisplayName = useAppSelector((state: RootState) => state.user.displayName);
    const imgSrc = useAppSelector((state: RootState) => state.user.imgSrc);
    const dispatch = useAppDispatch();

    useEffect(() => {
        accessToken !== undefined && (
            fetchUserData(accessToken).then(res => {
                dispatch(setUserID(res.id));
                dispatch(setUserDisplayName(res.display_name));
                res.images.length > 0 ? dispatch(setImgSrc(res.images[0].url)) : dispatch(setImgSrc("https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&amp;f=y"));
            }));
    }, [accessToken, dispatch]);

    return (
        <div className="profile">
            <img className="img profile" src={imgSrc} alt={userDisplayName} />
            <p>{userDisplayName}</p>
        </div>
    )
}

export default Profile;