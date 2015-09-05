

## Running the app

```
cp settings.json.example settings.json
meteor --settings settings.json
```
# Issues loading Ionic assets?
in /client/stylesheets/app.scss replace 
```javascript
// Ionic
@import '../../.meteor/local/build/programs/server/assets/packages/meteoric_ionic-sass/_ionic';
@import '../../.meteor/local/build/programs/server/assets/packages/meteoric_ionicons-sass/_ionicons';
```
With:
```javascript
// Ionic
@import '.meteor/local/build/programs/server/assets/packages/meteoric_ionic-sass/_ionic';
@import '.meteor/local/build/programs/server/assets/packages/meteoric_ionicons-sass/_ionicons';
```

## License
[MIT License](https://github.com/meteoric/meteorhunt/blob/master/LICENSE)
# ProjectB11
