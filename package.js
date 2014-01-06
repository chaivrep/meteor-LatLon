Package.describe({
    summary: "Latitude/longitude spherical geodesy formulae & scripts (c) Chris Veness 2002-2012"
});

Package.on_use(function (api) {
    api.export("LatLon");
    api.export("Geo");
    api.add_files(['lib/Geo.js','lib/LatLon.js'], ['client', 'server']);
});