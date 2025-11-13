import { AppleMusicAuth } from 'apple-music-auth';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    AppleMusicAuth.echo({ value: inputValue })
}
