<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.40/moment-timezone-with-data-1970-2030.min.js"></script>
    <title>World Clock - Stacy Galindo</title>
  </head>
  <body>
    <div class="container">
      <h1>World Clock</h1>
      <select id="city">
        <option value="">Choose a city</option>
        <option value="current">My current location</option>
        <option value="Europe/Madrid">Madrid</option>
        <option value="America/New_York">New York</option>
        <option value="Asia/Tokyo">Tokyo</option>
      </select>

      <div id="cities">
        <div class="city" id="sydney">
          <div>
            <h2>Sydney🇦🇺</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>
        <div class="city" id="dubai">
          <div>
            <h2>Dubai🇦🇪</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>
        <div class="city" id="tokyo">
          <div>
            <h2>Tokyo🇯🇵</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>
      </div>
    </div>
    <footer>
      This project was coded by <strong>Stacy Galindo</strong> and is
      <a href="https://github.com/sgalindo08?tab=repositories" target="_blank">
        open source on GitHub.</a
      >
    </footer>
    <script src="javascript/app.js"></script>
  </body>
</html>