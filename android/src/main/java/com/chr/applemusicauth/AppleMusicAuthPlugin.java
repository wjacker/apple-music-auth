package com.chr.applemusicauth;

import com.getcapacitor.Logger;

public class AppleMusicAuthPlugin {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
