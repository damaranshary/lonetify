import {ChangeEvent, FormEvent} from "react";

export type PlaylistFormProps = {
    handleAddPlaylistOnChangeInput: (e: ChangeEvent<HTMLInputElement> ) => void;
    handleAddPlaylistOnChangeTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    handleAddPlaylistOnSubmit: (e: FormEvent<HTMLFormElement>) => void
    playlistData: {
        title: string;
        description: string;
    }
}

const PlaylistForm = ({ handleAddPlaylistOnChangeInput, handleAddPlaylistOnChangeTextArea, handleAddPlaylistOnSubmit, playlistData } : PlaylistFormProps) => {
    return (
        <div className="playlist-form">
            <form onSubmit={handleAddPlaylistOnSubmit}>
                <label htmlFor="title">Title</label><br />
                <input className="form-title" id="title" type="text" value={playlistData.title} onChange={handleAddPlaylistOnChangeInput} name="title" minLength={10} />
                <br />
                <label htmlFor="description"> Description </label><br />
                <textarea className="form-description" id="description" value={playlistData.description} onChange={handleAddPlaylistOnChangeTextArea} name="description" minLength={10}/>
                <br />
                <button className="btn submit" type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default PlaylistForm;