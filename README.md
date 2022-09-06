# Collection Corner!

This is an app to maintain various collections such as retro video game consoles and amiibo figurines. Enjoy!

## Important Links

- [Deployed frontend](https://my-collections.netlify.app/)
- [Deployed API Server](https://immense-refuge-16416.herokuapp.com/)

## App planning resources

- [Trello Board](https://trello.com/invite/b/ABTWrZXr/af5e35ff4cbe5df2caec988fc6eac12d/fspp-inventory-app)

## App Features

- This app is set up to look and work properly on desktop and mobile platforms.
- Customized to suit viewport for Apple Iphone 13 pro max screen.
- Users can add, edit and delete Amiibos, consoles, and store locations.
- [Sound effects](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio) when user successfully adds, edits, or deletes an item.
- Uses [React Toastify](https://www.npmjs.com/package/react-toastify) for success message pop ups.
- Accesses an [Amiibo API](https://www.amiiboapi.com/) to display the entire amiibo lineup for the user to easily use official character names and images.
- Add new amiibo form is fixed on the page so that its visible as a user scrolls through 850+ amiibos from the API.
- Links to shop for amiibos and consoles from external website.
- links to google maps for store locations.
- links to Mercari and Google Maps will redirect to the corresponding app if installed on your mobile device.
- Customized favicon and home logo. Credit to [Jossy Pascasio](https://github.com/named-josie)
- Includes an "About" page that includes links to github repo and amiibo API documentation. Uses [React Icons](https://react-icons.github.io/react-icons) in this page.

## If you'd like to run my project locally, please read the following steps:

### Frontend Setup

```
# clone this repository to your machine.
git clone git@github.com:Lortiz528/FSPP-App.git

# navigate to the front-end directory
cd FSPP-App/front-end

# create a .env file and paste in the following:
REACT_APP_API_URL=http://localhost:3333

# npm install while in the front-end folder
npm install

# to start the front end server
npm start
```

### Backend Setup

```
# navigate to the back-end directory
cd FSPP-App/back-end

# create a .env file and paste in the following:

PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=home_inventory

# npm install while in the back-end folder
npm install

# initialize and seed the database
npm run db:init
npm run db:seed

# start the server
nodemon server.js

```
