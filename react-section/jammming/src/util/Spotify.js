let accessToken;
let expiresIn;
const cliendId = "9f8f74a3ae5a450db5e51c3f9b68b94f";
const redirectUrl = "http://localhost:3000/";

export const Spotify = {
    getAcessToken() {
        if (accessToken) {
            return accessToken;
        }
        const accessTockenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTockenMatch && expiresInMatch) {
            accessToken = accessTockenMatch[1];
            expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = "", expiresIn * 1000);
            window.history.pushState('Acess Token', null, "/");
            return accessToken
        } else {
            const endpoint = `https://accounts.spotify.com/authorize?client_id=${cliendId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
            window.location(endpoint);
        }
    }

}