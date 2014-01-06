Package.describe({
    summary: "Latitude/longitude spherical geodesy formulae & scripts (c) Chris Veness 2002-2012"

    Package.on_use(function (api) {
        api.add_files(['Geo.js','LatLon.js'], ['client', 'server']);
    });
});