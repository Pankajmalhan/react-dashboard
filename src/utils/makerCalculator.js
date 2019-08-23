rad2degr = (rad) => rad * 180 / Math.PI
degr2rad = (degr) => degr * Math.PI / 180
deg2rad = (deg) => deg * (Math.PI / 180)

export const maxDistanceFromCentre = (allCoords, centreCoords) => {
    let max = -Infinity;
    for (let coordinate of allCoords) {
        max = Math.max(max, getDistanceFromLatLonInKm(coordinate[0], coordinate[1], centreCoords[0], centreCoords[1]))
    }
    return Math.floor(max);
}

export const getLatLngCenter = (latLngInDegr) => {
    var LATIDX = 0;
    var LNGIDX = 1;
    var sumX = 0;
    var sumY = 0;
    var sumZ = 0;

    for (var i = 0; i < latLngInDegr.length; i++) {
        var lat = degr2rad(latLngInDegr[i][LATIDX]);
        var lng = degr2rad(latLngInDegr[i][LNGIDX]);
        // sum of cartesian coordinates
        sumX += Math.cos(lat) * Math.cos(lng);
        sumY += Math.cos(lat) * Math.sin(lng);
        sumZ += Math.sin(lat);
    }

    var avgX = sumX / latLngInDegr.length;
    var avgY = sumY / latLngInDegr.length;
    var avgZ = sumZ / latLngInDegr.length;

    // convert average x, y, z coordinate to latitude and longtitude
    var lng = Math.atan2(avgY, avgX);
    var hyp = Math.sqrt(avgX * avgX + avgY * avgY);
    var lat = Math.atan2(avgZ, hyp);

    return ([
        rad2degr(lat),
        rad2degr(lng)]);
}
export const GetCenterFromDegrees = (data) => {
    if (!(data.length > 0)) {
        return false;
    }

    var num_coords = data.length;

    var X = 0.0;
    var Y = 0.0;
    var Z = 0.0;

    for (i = 0; i < data.length; i++) {
        var lat = data[i][0] * Math.PI / 180;
        var lon = data[i][1] * Math.PI / 180;

        var a = Math.cos(lat) * Math.cos(lon);
        var b = Math.cos(lat) * Math.sin(lon);
        var c = Math.sin(lat);

        X += a;
        Y += b;
        Z += c;
    }

    X /= num_coords;
    Y /= num_coords;
    Z /= num_coords;

    var lon = Math.atan2(Y, X);
    var hyp = Math.sqrt(X * X + Y * Y);
    var lat = Math.atan2(Z, hyp);

    var newX = (lat * 180 / Math.PI);
    var newY = (lon * 180 / Math.PI);

    return new Array(newX, newY);
}

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(
            deg2rad(lat1)) * Math.cos(
                deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

