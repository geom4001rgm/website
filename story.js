var config = {
    style: 'mapbox://styles/geom4001/cl91jrwy0000514trazylohwv',
    accessToken: 'pk.eyJ1IjoiZ2VvbTQwMDEiLCJhIjoiY2w4bmw3NjN0MDAwZzNvcDl6dnppZnp0YyJ9.5ewi5WQKlGiKEK4hMh8sjA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Public Transit in Ottawa, Ontario',
    subtitle: '(lack of) Coverage in the OC Transpo Network',
    byline: 'By Razz and Graham',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'ottawa_intro',
            title: 'Intro to Ottawa',
            image: 'images/ottawa.jpeg',
            description: 'Ottawa is the capital city of Canada, it has a population of almost 1.5 million people spread across 23 Wards and almost 2800 km^2 of area. It is serviced by the municipal transit system called OC Transpo, which has a budget of <b>$695 million</b>.<br><br>Due to the large and sprawling nature of the city, it is expected that not every area has equal coverage by the transit system. However, the focus of the OC Transpo system on suburban commuters creates an interesting spatial phenomena in the coverage map.',
            location: {
              center: [-75.96011, 45.24502],
              zoom: 8.23,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                     layer: 'Ottawa',
                     opacity: 1
                },
                {
                     layer: 'ottawa_labels',
                     opacity: 0
                },
                {
                     layer: 'Routes',
                     opacity: 0
                },
                {
                     layer: 'Stops',
                     opacity: 0
                }
            ],
            onChapterExit: [
                //{
                //     layer: 'Ottawa',
                //     opacity: 0
                //}
            ]
        },
        {
            id: 'chart',
            title: 'Number of Stops by Municipal Ward',
            image: '',
            description: '<canvas id="myChart" width="400" height="800"></canvas> <br>The above graph shows the number of bus stops per square km for each of the municipal wards. These were divided into four density categories: <span style="color: grey">grey (<2 stops/sq km)</span>, <span style="color: red">red (2-10 stops/sq km)</span>, <span style="color: orange">orange (10-15 stops/sq km)</span>, and <span style="color:green">green (>15 stops sq/km)</span>.<br><br> Though the expected spatial pattern would be for the transit to be the most dense closest to the city center and to gradually decrease in effectiveness, as can be seen in the color-matched polygons, the red section is located in the middle of the green and orange coverage zones. This is due to the focus of OC Transpo on catering to suburban commuters in areas like Barrhaven and Kanata, who primarily communte from their suburbs directly to office jobs downtown, and skip over the middle area entirely.',
            location: {
              center: [-76.02996, 45.34747],
              zoom: 8.98,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                   layer: 'Ottawa',
                   opacity: 1
              },
              {
                layer: 'ottawa_labels',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'stops',
            title: 'OCTranspo Stops',
            image: 'images/busstop.jpg',
            description: 'The spatial phenomena described above can also be seen in the relative lack of points (indicating bus stops), in the red colored areas as compared to downtown and the suburbs.',
            location: {
              center: [-75.71648, 45.30453],
              zoom: 9.83,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                   layer: 'Stops',
                   opacity: 1
              }
            ],
            onChapterExit: [
              {
                   layer: 'Stops',
                   opacity: 0
              }

            ]
        },
        {
            id: 'route1',
            title: 'OCTranspo Routes',
            image: 'images/bus.jpg',
            description: 'The focus on suburban commuters can further be seen by the types and frequencies of routes which OC Transpo offers. Routes are color coded based on this key: <br> <ul><li>Blue (Rapid): quick station-to-station bus service along the transit or highway. Operates 7 days a week.</li><li>Red (Frequent base network): Service every 15 minutes or less from 6am to 6pm on weekdays. Operates 7 days a week along main roads.</li><li>Purple (32 connexion routes): quick and convenient connection from home to Line 1 (Red). Operates weekday rush-hours only, both morning and night.</li><li>Grey (Local connecting routes): Custom routing to local destinations.</li><li>White (Limited Service): route only runs during certain times of the day, or on certain days of the week (ie. school trips, events).</li></ul> <br><br> The current map view shows the downtown area, which generally has a high proportion of rapid or frequent bus service.',
            location: {
              center: [-75.67247, 45.37494],
              zoom: 11.64,
              pitch: 45.00,
              bearing: -40.00
            },
            onChapterEnter: [
              {
                   layer: 'Routes',
                   opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'route2',
            title: 'OCTranspo Routes',
            image: 'images/bus.jpg',
            description: 'In contrast to the rapid and frequent transit available downtown, in the suburbs of Kanata and Barrhaven, transit is mostly limited to the purple connexion routes which serve commuters, and the white limited service routes which are generally used for elementary and high school students. <br><br>This difference in service type is part of the cause of the car-dependance found in Ottawa and other Canadian cities; as the public transit to and from the suburbs only focuses on commuters to the city center at hours that serve capitalist interests, these citizens are not able to use public transit for their other daily duties, such as grocery shopping or visiting friends and family.',
            location: {
              center: [-75.87288, 45.27345],
              zoom: 11.05,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [

            ],
            onChapterExit: [
              {
                   layer: 'Routes',
                   opacity: 0
              }
            ]
        },
        {
          id: 'video',
          title: 'The O-Train Garbage Fire',
          description: '<iframe width="350" height="300" src="https://www.youtube.com/embed/jVZYqjcDnKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>As the video above illustrates; the O-Train, which is the primary life-vein of Ottawa\'s current commuter focused system, does not work consistently or safely due to corruption related to city council and developers when it was created.<br><br>To learn more about developer influence on Ottawa\'s city council visit <a href="https://development.money/">Follow the Money</a>',
          location:{
            center: [-75.96011, 45.24502],
            zoom: 8.23,
            pitch: 45.00,
            bearing: 0.00
          }
        }

    ]
};
