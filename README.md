### This is a Project to Clone Spotify : "Lonetify"

Lonetify Feature:
- Show user Profile (Display Name and Image)
- Homepage that will show New Releases Album
- Searchpage that can be used for searching certain tracks based on query
- Create Playlist page that can create playlist to the user and 
- add Item to the Playlist based on selected Tracks in the search page

Spotify API Endpoint that used by this Project: 
- Search for Items (tracks)
- Get New Releases Album
- Create Playlist 
- Add Items to Playlist
- Get User Profile

extended feature from gigih-homework are:
- Get New Releases Album and
- Get User Profile

## Installation

In the project directory, you can run:

note: 
make sure you create a .env.local to change the `REACT_APP_SPOTIFY_KEY` to get your clientID from spotify API

## `npm install`

if you want to build this project on your local, try start `npm install` for installing all the package included in this project

## `npm start`

Runs the app in the development mode.
Open http://localhost:3000/ to view it in your browser.

## The Route

`localhost:3000/` : 
The page will shows a login button as a landing page

`localhost:3000/create-playlist` :
if user already login (get an accessToken) 
=> The page will show a create playlist form and a list of selected tracks of the user choice

if user haven't logged in => the page will redirect to `localhost:3000/`

`localhost:3000/home` : 
The page will shows new releases album

`localhost:3000/search` :
The page will shows a form for search a tracks


This project was bootstrapped with [Create React App].
This project is unresponsive ;'(. The best resolution for you to running this project are 1366x768

## Special Thanks to #GenerasiGIGIH~