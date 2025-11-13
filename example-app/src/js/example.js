import { AppleMusicAuth } from 'apple-music-auth';

window.requestUserToken = () => {
    const developerToken = document.getElementById("developerToken").value;
    
    AppleMusicAuth.requestUserToken({ developerToken: developerToken }).then((userToken)=>{
        alert("Get user apple music token success:" + JSON.stringify(userToken));
    }).catch((error)=>{
        alert("Get user apple music token failed:" + error);
    })
}
