import { AppleMusicAuthPlugin } from '@chrp/apple-music-auth';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    AppleMusicAuthPlugin.echo({ value: inputValue })
}
