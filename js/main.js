(function()
{
	var map = new google.maps.Map(document.querySelector('.map-wrapper')), marker;

	function initMap(position)
	{
			map.setCenter
			(
				{ 
					lat: position.coords.latitude, 
					lng: position.coords.longitude
				}
			);

			map.setZoom(16);

		marker = new google.maps.Marker
		(
			{ 
				lat: position.coords.latitude, 
				lng: position.coords.longitude,
				map: map,
				title: 'Hello' 
			}
			
		);

	}

	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(initMap, handleError);
	}
	else
	{
		console.log('Your browser does not have geolocation');
	}

	function handleError(e)
	{
		console.log(e);
	}

})();