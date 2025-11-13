import { AppleMusicAuth } from 'apple-music-auth';

window.requestUserToken = () => {
    const developerToken = document.getElementById("developerToken").value;
    
    AppleMusicAuth.requestUserToken({ value: developerToken }).then((userToken)=>{
        alert("Get user apple music token success:" + userToken);
    }).catch((error)=>{
        alert("Get user apple music token failed:" + error);
    })
}
