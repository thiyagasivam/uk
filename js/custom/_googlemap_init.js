// Init Google map
var THEMEREX_googlemap_init_obj = {};
var THEMEREX_googlemap_styles = {
	'default': [],
	'invert': [ { "stylers": [ { "invert_lightness": true }, { "visibility": "on" } ] } ],
	'dark': [{"featureType":"landscape","stylers":[{ "invert_lightness": true },{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
	'simple': [
				{
				  stylers: [
					{ hue: "#00ffe6" },
					{ saturation: -20 }
				  ]
				},{
				  featureType: "road",
				  elementType: "geometry",
				  stylers: [
					{ lightness: 100 },
					{ visibility: "simplified" }
				  ]
				},{
				  featureType: "road",
				  elementType: "labels",
				  stylers: [
					{ visibility: "off" }
				  ]
				}
			  ],
	'greyscale': [
					{
						"stylers": [
							{ "saturation": -100 }
						]
					}
				],
	'greyscale2': [
				{
				 "featureType": "landscape",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": 20.4705882352941 },
				  { "gamma": 1 }
				 ]
				},
				{
				 "featureType": "road.highway",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": 25.59999999999998 },
				  { "gamma": 1 }
				 ]
				},
				{
				 "featureType": "road.arterial",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": -22 },
				  { "gamma": 1 }
				 ]
				},
				{
				 "featureType": "road.local",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": 21.411764705882348 },
				  { "gamma": 1 }
				 ]
				},
				{
				 "featureType": "water",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": 21.411764705882348 },
				  { "gamma": 1 }
				 ]
				},
				{
				 "featureType": "poi",
				 "stylers": [
				  { "hue": "#FF0300" },
				  { "saturation": -100 },
				  { "lightness": 4.941176470588232 },
				  { "gamma": 1 }
				 ]
				}
			   ],
	'style1': [{
					"featureType": "landscape",
					"stylers": [
						{ "hue": "#FF0300"	},
						{ "saturation": -100 },
						{ "lightness": 20.4705882352941 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "road.highway",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 25.59999999999998 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "road.arterial",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": -22 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "road.local",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 21.411764705882348 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "water",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 21.411764705882348 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "poi",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 4.941176470588232 },
						{ "gamma": 1 }
					]
				}
			],
	'style2': [
		 {
		  "featureType": "landscape",
		  "stylers": [
		   {
		    "hue": "#007FFF"
		   },
		   {
		    "saturation": 100
		   },
		   {
		    "lightness": 156
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "road.highway",
		  "stylers": [
		   {
		    "hue": "#FF7000"
		   },
		   {
		    "saturation": -83.6
		   },
		   {
		    "lightness": 48.80000000000001
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "road.arterial",
		  "stylers": [
		   {
		    "hue": "#FF7000"
		   },
		   {
		    "saturation": -81.08108108108107
		   },
		   {
		    "lightness": -6.8392156862745
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "road.local",
		  "stylers": [
		   {
		    "hue": "#FF9A00"
		   },
		   {
		    "saturation": 7.692307692307736
		   },
		   {
		    "lightness": 21.411764705882348
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "water",
		  "stylers": [
		   {
		    "hue": "#0093FF"
		   },
		   {
		    "saturation": 16.39999999999999
		   },
		   {
		    "lightness": -6.400000000000006
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "poi",
		  "stylers": [
		   {
		    "hue": "#00FF60"
		   },
		   {
		    "saturation": 17
		   },
		   {
		    "lightness": 44.599999999999994
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 }
	],
	'style3':  [
 {
  "featureType": "landscape",
  "stylers": [
   {
    "hue": "#FFA800"
   },
   {
    "saturation": 17.799999999999997
   },
   {
    "lightness": 152.20000000000002
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "road.highway",
  "stylers": [
   {
    "hue": "#007FFF"
   },
   {
    "saturation": -77.41935483870967
   },
   {
    "lightness": 47.19999999999999
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "road.arterial",
  "stylers": [
   {
    "hue": "#FBFF00"
   },
   {
    "saturation": -78
   },
   {
    "lightness": 39.19999999999999
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "road.local",
  "stylers": [
   {
    "hue": "#00FFFD"
   },
   {
    "saturation": 0
   },
   {
    "lightness": 0
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "water",
  "stylers": [
   {
    "hue": "#007FFF"
   },
   {
    "saturation": -77.41935483870967
   },
   {
    "lightness": -14.599999999999994
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "poi",
  "stylers": [
   {
    "hue": "#007FFF"
   },
   {
    "saturation": -77.41935483870967
   },
   {
    "lightness": 42.79999999999998
   },
   {
    "gamma": 1
   }
  ]
 }
]
}

function googlemap_init(dom_obj, coords) {
	"use strict";
	try {
        var id = dom_obj.id;
        THEMEREX_googlemap_init_obj[id] = {};
        THEMEREX_googlemap_init_obj[id].dom = dom_obj;
        THEMEREX_googlemap_init_obj[id].point = coords.point;
        THEMEREX_googlemap_init_obj[id].description = coords.description;
        THEMEREX_googlemap_init_obj[id].title = coords.title;
        THEMEREX_googlemap_init_obj[id].opt = {
            zoom: coords.zoom,
            center: null,
            scrollwheel: false,
            scaleControl: false,
            disableDefaultUI: false,
            panControl: true,
            zoomControl: true, //zoom
            mapTypeControl: false,
            streetViewControl: false,
            overviewMapControl: false,
            styles: THEMEREX_googlemap_styles[coords.style ? coords.style : 'default'],
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        if (coords.latlng=='') {
            var custom_map = new google.maps.Geocoder();
            custom_map.geocode({address: coords.address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0].geometry.location.lat && results[0].geometry.location.lng) {
                        coords.latlng = '' + results[0].geometry.location.lat() + ',' + results[0].geometry.location.lng();
                    } else {
                        coords.latlng = results[0].geometry.location.toString();
                        coords.latlng = coords.latlng.replace(/\(\)/g, '');
                    }
                    googlemap_create(id, coords.latlng);
                } else
                    // alert(THEMEREX_GEOCODE_ERROR + ' ' + status);
            });
        } else
            googlemap_create(id, coords.latlng);

    } catch (e) {
        //alert(THEMEREX_GOOGLE_MAP_NOT_AVAIL);
    };
}

function googlemap_create(id) {
    "use strict";
    var latlng = arguments[1] ? arguments[1] : '';
    if (latlng) {
        var latlngStr = latlng.split(',');
        THEMEREX_googlemap_init_obj[id].opt.center = new google.maps.LatLng(latlngStr[0], latlngStr[1]);	//parseFloat(latlngStr[0]), parseFloat(latlngStr[1])
    }
    THEMEREX_googlemap_init_obj[id].map = new google.maps.Map(THEMEREX_googlemap_init_obj[id].dom, THEMEREX_googlemap_init_obj[id].opt);
    THEMEREX_googlemap_init_obj[id].map.setCenter(THEMEREX_googlemap_init_obj[id].opt.center);
    var markerInit = {
        map: THEMEREX_googlemap_init_obj[id].map,
        position: THEMEREX_googlemap_init_obj[id].opt.center	//THEMEREX_googlemap_init_obj[id].map.getCenter()
    };
    if (THEMEREX_googlemap_init_obj[id].point) markerInit.icon = THEMEREX_googlemap_init_obj[id].point;
    if (THEMEREX_googlemap_init_obj[id].title) markerInit.title = THEMEREX_googlemap_init_obj[id].title;
    var marker = new google.maps.Marker(markerInit);
    var infowindow = new google.maps.InfoWindow({
        content: THEMEREX_googlemap_init_obj[id].description
    });
    google.maps.event.addListener(marker, "click", function() {
        infowindow.open(THEMEREX_googlemap_init_obj[id].map, marker);
    });
    jQuery(window).resize(function() {
        if (THEMEREX_googlemap_init_obj[id].map)
            THEMEREX_googlemap_init_obj[id].map.setCenter(THEMEREX_googlemap_init_obj[id].opt.center);
    });
}




function googlemap_refresh(){
    for(id in THEMEREX_googlemap_init_obj){
        googlemap_create(id)
    }
}

jQuery(document).ready(function() {
	jQuery('.sc_googlemap').each(function(){
		var map_address = jQuery(this).data('address');
		var map_latlng = jQuery(this).data('latlng');
	 	var map_id = jQuery(this).attr('id');
 		var map_zoom = jQuery(this).data('zoom');
 		var map_style = jQuery(this).data('style');
		var map_descr = jQuery(this).data('description');
		var map_title = jQuery(this).data('title');
 		var map_point = jQuery(this).data('point');
		googlemap_init( jQuery('#'+map_id).get(0), {address: map_address , latlng: map_latlng, style: map_style, zoom: map_zoom, description: map_descr, title: map_title, point: map_point});
	});
});
