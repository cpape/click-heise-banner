
var clickBanner = function ( count ) {
    //console.log('RUN - ' + count);
    if ( count >= 100 ) {
        return false;
    } else {
        let banner = document.getElementById( "uc-btn-accept-banner" );
        console.log('Tried to click the banner resulted in: '+ banner);
        if ( banner == null ) {
            setTimeout( function() {
                clickBanner ( count + 1 );
            }, 100 );
        } else {
            banner.click();
            return true;
        }
    }
}

clickBanner(0);
