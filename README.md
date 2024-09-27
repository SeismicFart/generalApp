First:

Install nodejs  (select to install other stuff like chocolatey too)
DONT Install expo cli globally (DEPRECIATED)
Install random libraries
npm i 
react-native-heroicons
react-native-snap-carousel
expo-linear-gradient
react-native-progress

react-navigation


npx create-expo-app ./
cd into new folder
npx expo start
  to check if everything works
  - hit w to launch web version
  - prompted to install react dom n stuff click y
Got yellow warning:
  npx expo install @expo/webpack-config@^19.0.0

npx expo start
reload if not working first time / no text

Auto Import, esx7+ react by dsznajder, babel js extensions
One Dark Pro Dark theme

Make sure to download assets n constants folder and paste into app folder

NEED AN INDEX.JS IN EACH FOLDER THAT EXPORTS EVERYTHING FROM OTHER FILES IN FOLDER I.E COMPONENTS FOLDER

Use ctrl+/ to comment bc it might be diff depending which line ur on

Export default only exports one thing, use export before func name to export multiple

TouchableOpacity is a button kinda - area that we can click
IF A PARAMETER ISNT WORKING CHECK SPELLING
Make sure to import everything in every file <- most goofy ahh errors

`Person: ${index}` === PYTHON F STRING

(<ImageCmp imgURL={imgURL} index={index} />))
THESE ARE "PROPS" not parameteres
access in function definition like this:
export const ImageCmp = ({imgURL, index}) => {


Margin vertical is above and below
Margin is all sides
Margin top just top
