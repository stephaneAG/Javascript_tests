![Phaser 2.0](http://www.phaser.io/images/phaser2-github.png)

# Index

- [About](#about)
- [What's New?](#whats-new)
- [Getting Started](#getting-started)
- [Change Log](#change-log)
- [How to Build](#how-to-build)
- [Koding](#koding)
- [Bower / NPM](#bower)
- [CDNJS](#cdnjs)
- [Requirements](#requirements)
- [Build Files](#build-files)
- [Learn By Example](#example)
- [Features](#features)
- [Road Map](#road-map)
- [Mighty Editor](#mighty-editor)
- [Contributing](#contributing)
- [Bugs?](#bugs)
- [License](#license)

<a name="about"></a>
# Phaser 2.1.2

Phaser is a fast, free and fun open source game framework for making desktop and mobile browser HTML5 games. It uses [Pixi.js](https://github.com/GoodBoyDigital/pixi.js/) internally for fast 2D Canvas and WebGL rendering.

Version: 2.1.2 "Whitebridge" - Released: 9th October 2014

By Richard Davey, [Photon Storm](http://www.photonstorm.com)

* View the [Official Website](http://phaser.io)
* Follow on [Twitter](https://twitter.com/photonstorm)
* Join the [Forum](http://www.html5gamedevs.com/forum/14-phaser/)
* StackOverflow tag: [phaser-framework](http://stackoverflow.com/questions/tagged/phaser-framework)
* Source code for 320+ [Phaser Examples](https://github.com/photonstorm/phaser-examples) or [browse them online](http://examples.phaser.io)
* View the growing list of [Phaser Plugins](https://github.com/photonstorm/phaser-plugins)
* Read the [documentation online](http://docs.phaser.io)
* Join our [#phaserio IRC channel](http://www.html5gamedevs.com/topic/4470-official-phaserio-irc-channel-phaserio-on-freenode/) on freenode
* Subscribe to the [Phaser Newsletter](https://confirmsubscription.com/h/r/369DE48E3E86AF1E) and we'll email you when new versions are released.
* Please help support our work via [Gittip](https://www.gittip.com/photonstorm/)

![div](http://phaser.io/images/div4.png)

<a name="whats-new"></a>
## Welcome to Phaser and What's new in 2.1.2?

Phaser 2.1.2 carries on with our latest round of new features, updates and fixes, demonstrating our commitment to continuously improving our framework and responding to feedback.

This release adds in a number of new features including Audio Sprite json format support, native loading of XML files, Sound fades, per character Text colours, further updates to BitmapData, the ability to use BitmapData with frames as Sprite textures, Group filter, search the Cache by URL and plenty of updates and bug fixes too - including the death of the pesky getPixel issue on Safari / iOS.

Internally we are using Phaser in ever larger client based projects. Thousands of lines of code spread across many States and classes, and we're paying close attention to how best to adapt the API to make life easier for those building apps of the size we are. If there are any features you would like to see then now is the time to suggest them, either by email, the forum or github.

We're also pleased to announce that we have 3 new premium plugins gearing up for launch. They are:

Phaser Box2D - Adds complete Box2D support directly into Phaser, with lots of help methods, over 50 examples and 5 demo games.

Phaser Path Manager - Create complex motion paths for Sprites with a lovely visual editor and this new plugin. No longer rely on tweens for motion :) Instead draw a path, with full branch support, path orientation, segment speeds, path events and more.

Advanced Particle System - The particles included with Phaser are flexible and can create attractive effects. But Advanced Particles is a complete replacement offering professional level particle effects for your games. From multiple render targets, to bitmap caching to all kinds of events, emitters and properties.

Each plugin will come in a range of versions to suit all budgets and there are more on the way. Please visit the [launch page](http://phaserplugins.launchrock.com) to sign-up for notification as soon as they're ready.

Until then happy coding everyone! And we hope to see you on the forums.

![boogie](http://www.phaser.io/images/spacedancer.gif)

![div](http://phaser.io/images/div1.png)

<a name="getting-started"></a>
## Getting Started Guides

We have a [Getting Started Guide](http://phaser.io/getting-started-js.php) which covers all you need to begin developing games with Phaser. From setting up a web server to picking an IDE. If you're new to HTML5 game development, or are coming from another language like AS3, then we recommend starting there.

We wrote a comprehensive [How to Learn Phaser](http://gamedevelopment.tutsplus.com/articles/how-to-learn-the-phaser-html5-game-engine--gamedev-13643) guide for GameDevTuts+  which covers finding tutorials, examples and support.

The [Game Mechanic Explorer](http://gamemechanicexplorer.com) is a great interactive way to learn how to develop specific game mechanics in Phaser. Well worth exploring once you've got your dev environment set-up.

Finally the list of [community authored Phaser Tutorials](http://www.lessmilk.com/phaser-tutorial/) is growing fast!

![Phaser Logo](http://www.photonstorm.com/wp-content/uploads/2013/09/phaser_10_release.jpg)

![div](http://phaser.io/images/div2.png)

<a name="change-log"></a>
## Change Log

Version 2.1.2 - "Whitebridge" - October 9th 2014

### New Features

* StateManager.unlink will null all State-level Phaser properties, such as `game`, `add`, etc. Useful if you never need to return to the State again.
* Cache.removeImage has a new parameter: `removeFromPixi` which is `true` by default. It will remove the image from the Pixi BaseTextureCache as well as from the Phaser Cache. Set to false if you don't want the Pixi cache touched.
* Group.ignoreDestroy boolean will bail out early from any call to `Group.destroy`. Handy if you need to create a global Group that persists across States.
* Loader can now natively load XML files via `load.xml`. Once the XML file has loaded it is parsed via either DOMParser or ActiveXObject and then added to the Cache, where it can be retrieved via `cache.getXML(key)`.
* Cache now has support for XML files stored in their own container. You can add them with `cache.addXML` (typically this is done from the Loader automatically for you) and get them with `cache.getXML(key)`. There is also `cache.checkXMLKey(key)`, `cache.checkKeys` and `cache.removeXML(key)`.
* Rectangle.aabb is a new method that will take an array of Points and return a Rectangle that matches the AABB (bounding area) of the Points (thanks @codevinsky #1199)
* AudioSprite support is now built into the Loader and SoundManager. AudioSprites are like sprite sheets, only they consist of a selection of audio files and markers in a json configuration. You can find more details at https://github.com/tonistiigi/audiosprite (thanks @codevinsky #1205)
* Point.parse will return a new Point object based on the x and y properties of the object given to Point.parse (thanks @codevinsky #1198)
* Sound.fadeOut(duration) will fade the Sound to a volume of zero over the duration given. At the end of the fade the Sound will be stopped and Sound.onFadeComplete dispatched.
* Sound.fadeIn(duration, loop) will start the Sound playing, or restart it if already playing, set its volume to zero and then increase the volume over the duration given until it reaches 1. At the end of the fade the Sound.onFadeComplete event is dispatched.
* Text.addColor allows you to set specific colors within the Text. It works by taking a color value, which is a typical HTML string such as `#ff0000` or `rgb(255,0,0)` and a position. The position value is the index of the character in the Text string to start applying this color to. Once set the color remains in use until either another color or the end of the string is encountered. For example if the Text was `Photon Storm` and you did `Text.addColor('#ffff00', 6)` it would color in the word `Storm` in yellow.
* Text.clearColors resets any previously set colors from `Text.addColor`.
* If you pass a tinted Sprite to `BitmapData.draw` or `BitmapData.copy` it will now draw the tinted version of the Sprite to the BitmapData and not the original texture.
* BitmapData.shadow(color, blur, x, y) provides a quick way to set all the relevant shadow settings, which are then be used in future draw calls.
* Cache.addBitmapData has a new parameter: `frameData` allowing you to pass a `Phaser.FrameData` object along with the BitmapData.
* Cache.getFrameData has a new parameter: `map` which allows you to specify which cache to get the FrameData from, i.e. `Phaser.Cache.IMAGE` or `Phaser.Cache.BITMAPDATA`.
* Sprite.loadTexture if given a BitmapData as the texture will now query the cache to see if it has any associated FrameData, and if so it will load that into the AnimationManager.
* BitmapData.textureLine takes a Phaser.Line object and an image in the image cache. It then accurately draws the image as a repeating texture for the full length of the line.
* AnimationManager.name will now return the `name` property of the currently playing animation, if any.
* Group.filter takes a predicate function and passes child, index, and the entire child array to it. It then returns an ArrayList containing all children that the predicate returns true for (thanks @codevinsky #1187)
* Cache.checkUrl allows you to check if a resource is in the cache based on an absolute URL (thanks @englercj #1221)
* Cache.getUrl gets a resource from the cache based on the absolute URL it was loaded from (thanks @englercj #1221)
* Sound.allowMultiple allows you to have multiple instances of a single Sound playing at once. This is only useful when running under Web Audio, and we recommend you implement a local pooling system to not flood the sound channels. But it allows for one Sound object to play overlapping times, useful for gun effects and similar (#1220)

### Updates

* TypeScript definitions fixes and updates (thanks @clark-stevenson @englercj @benjamindulau)
* Added the `sourceRect` and `maskRect` parameters back into `BitmapData.alphaMask` as they were accidentally removed in 2.1 (thanks seejay92)
* jsdoc fixes (thanks @danxexe #1209)
* AnimationParser is now using `value` instead of `nodeValue` when parsing atlas XML files, avoiding Chrome deprecation warnings (thanks @valtterip #1189)
* Color.webToColor restored. Converts a CSS rgba color into a native color value.
* Color.createColor now populates the `color` property of the returned object with the results of `Phaser.Color.getColor`.
* Color.createColor now has a `color32` property with the results of `Phaser.Color.getColor32`.
* Color.hexToColor has been optimised to inline the regex and has moved the createColor call so it now populates the color object fully, not just setting the r,g,b properties.
* Keyboard.PLUS and Keyboard.MINUS have been added to the list of key codes (thanks @VictorBjelkholm #1281)

### Bug Fixes

* If Game Objects change their frame, such as with an animated Sprite, and the change goes from a previously trimmed frame to a non-trimmed (full size) one, then the previous trim values were still left active, causing it to glitch (thanks stupot)
* If you called StateManager.start from within a states `init` method which also had a `preload` method it would fail to start the next State.
* StateManager.boot would call start on a State twice if it was added to the game and started before the DOM load had completed. This didn't cause an error but was duplicating function calls needlessly.
* Changing any of the Text properties such as font, lineSpacing and fontSize on a Text object that wasn't already on the display list would cause an updateTransform error. Parent is now checked first in all setters.
* A Timer with a delay value that was a float and not an integer would not loop correctly. Timer delay values are now passed through Math.round to avoid this (thanks @osmanzeki #1196)
* The Loader would incorrectly call `fileComplete` for legacy audio files instead of setting it as a callback, throwing up errors if the audio file failed to load (thanks @spayton #1212)
* The Uint32Array check used in Utils was incorrectly replacing Uint32Array on Safari, causing errors like BitmapData.getPixel32 to fail and other related issues (fixes #1043 and #1197)
* Camera.follow would break if the parent of the Sprite being followed was scaled in any way (thanks @englercj #1222)
* Fixed the 4fv uniform in the Pixelate filter.

For details about changes made in previous versions of Phaser see the full Change Log at https://github.com/photonstorm/phaser/blob/master/CHANGELOG.md

![div](http://phaser.io/images/div3.png)

<a name="how-to-build"></a>
## How to Build

We provide a fully compiled version of Phaser in the `build` folder, in both plain and minified formats.

You will also find custom builds in the `build\custom` folder, that split phaser up into components.

We also provide a Grunt script that will build Phaser from source.

Run `grunt` to perform a default build to the `dist` folder.

If you replace Pixi or p2 then run `grunt replace` to patch their UMD strings so they work properly with Phaser and requireJS.

Note: Some of you may not be aware, but the `phaser.min.js` file in the build folder contains all 3 physics systems bundled in. If you only need Arcade Physics then you can use `build\custom\phaser-arcade-physics.min.js` instead. This will save you 180KB from the minified file size.

![div](http://phaser.io/images/div4.png)

<a name="koding"></a>
## Koding

You can [clone the Phaser repo in Koding](https://koding.com/Teamwork?import=https://github.com/photonstorm/phaser/archive/master.zip&c=git1) and then start editing and previewing code right away using their web based VM development system.

![div](http://phaser.io/images/div5.png)

<a name="bower"></a>
## Bower / NPM

If you use bower you can install phaser with:

`bower install phaser`

If you use NPM you can install phaser with:

`npm install phaser`

Nice and easy :)

![Tanks](http://www.photonstorm.com/wp-content/uploads/2013/10/phaser_tanks-640x480.png)

![div](http://phaser.io/images/div6.png)

<a name="cdnjs"></a>
## CDNJS

Phaser is now available on [CDNJS](http://cdnjs.com). You can include the following in your html:

`http://cdnjs.cloudflare.com/ajax/libs/phaser/2.1.2/phaser.min.js`

Or if you prefer you can leave the protocol off, so it works via http and https:

`//cdnjs.cloudflare.com/ajax/libs/phaser/2.1.2/phaser.min.js`

![div](http://phaser.io/images/div1.png)

<a name="requirements"></a>
## Requirements

Games created with Phaser require a modern web browser that supports the canvas tag. This includes Internet Explorer 9+, Firefox, Chrome, Safari and Opera. It also works on mobile web browsers including stock Android 2.x browser and above and iOS5 Mobile Safari and above. But as always be aware of browser limitations. Not all features of Phaser work on all browsers.

### IE9

If you need to support IE9 or Android 2.x and want to use P2 physics then you must use the polyfill found in the `resources/IE9 Polyfill` folder. If you don't require P2 Physics (or don't care about IE9!) then you don't need this polyfill.

### JavaScript and TypeScript

Phaser is developed in JavaScript. We've made no assumptions about how you like to code your games, and were careful not to impose any form of class / inheritance / structure upon you. So you won't find it split into require modules or pull in 3rd party npm packages for example. That doesn't mean you can't, it just means we don't force you to do so. If you're a requireJS user you'll find a new template in the `resources\Project Templates` folder just for you.

If you code with [TypeScript](http://www.typescriptlang.org/) you'll find a comprehensive definitions file inside the `build` folder and tutorials on getting started.

<a name="build-files"></a>
### Build Files and Custom Builds

The `build` folder contains the pre-built packaged versions of Phaser.

Phaser is 143 KB gzipped (675 KB minified) when including *both* Arcade Physics and the full P2 Physics engine.

If you don't require P2 you can save yourself nearly 200 KB from the minified size and instead use the `phaser-arcade-physics.min.js` file found inside the `build/custom` folder. This version is only 109 KB gzipped (504 KB minified).

If you don't need any physics system at all, or are implementing your own, there is an even smaller build: `phaser-no-physics.min.js` in the `custom` folder that is only 95 KB gzipped (443 KB minified). Please note that this build doesn't include Tilemaps or Particle Emitter support either, as both rely on Arcade Physics.

You can create your own custom build of Phaser by looking at the grunt options and manifests in the tasks folder.

![div](http://phaser.io/images/div3.png)

<a name="example"></a>
## Learn By Example

Ever since we started Phaser we've been growing and expanding our extensive set of Examples. Currently over 320 of them!

They used to be bundled in the main Phaser repo, but because they got so large and in order to help with versioning we've moved them to their own repo.

So please checkout https://github.com/photonstorm/phaser-examples

Here you'll find an ever growing suite of Examples. Personally I feel that developers tend to learn better by looking at small refined code examples, so we created hundreds of them, and create new ones to test new features and updates. Inside the `examples` repo you'll find the current set. If you write a particularly good example then please send it to us.

The examples need to be run through a local web server (in order to avoid file access permission errors from your browser). You can use your own web server, or start the included web server using grunt.

Using a locally installed web server browse to the examples folder:

    examples/index.html

Alternatively in order to start the included web server, after you've cloned the repo, run `npm install` to install all dependencies, then `grunt connect` to start a local server. After running this command you should be able to access your local webserver at `http://127.0.0.1:8000`. Then browse to the examples folder: `http://127.0.0.1:8000/examples/index.html`

There is a 'Side View' example viewer as well. This loads all the examples into a left-hand frame for faster navigation. And if you've got php installed into your web server you may want to try `debug.php`, which provides a minimal examples list and debug interface.

You can also browse all [Phaser Examples](http://examples.phaser.io) online.

![div](http://phaser.io/images/div4.png)

<a name="features"></a>
## Features

**WebGL &amp; Canvas**

Phaser uses both a Canvas and WebGL renderer internally and can automatically swap between them based on browser support. This allows for lightning fast rendering across Desktop and Mobile. When running under WebGL Phaser now supports shaders, allowing for some incredible in-game effects. Phaser uses and contributes towards the excellent Pixi.js library for rendering.

**Preloader**

We've made the loading of assets as simple as one line of code. Images, Sounds, Sprite Sheets, Tilemaps, JSON data, XML and JavaScript files - all parsed and handled automatically, ready for use in game and stored in a global Cache for Sprites to share.

**Physics**

Phaser ships with our Arcade Physics system, Ninja Physics and P2.JS - a full body physics system. Arcade Physics is for high-speed AABB collision only. Ninja Physics allows for complex tiles and slopes, perfect for level scenery, and P2.JS is a full-body physics system, with constraints, springs, polygon support and more.

**Sprites**

Sprites are the life-blood of your game. Position them, tween them, rotate them, scale them, animate them, collide them, paint them onto custom textures and so much more!
Sprites also have full Input support: click them, touch them, drag them around, snap them - even pixel perfect click detection if needed.

**Groups**

Group bundles of Sprites together for easy pooling and recycling, avoiding constant object creation. Groups can also be collided: for example a "Bullets" group checking for collision against the "Aliens" group, with a custom collision callback to handle the outcome.

**Animation**

Phaser supports classic Sprite Sheets with a fixed frame size, Texture Packer and Flash CS6/CC JSON files (both Hash and Array formats) and Starling XML files. All of these can be used to easily create animation for Sprites.

**Particles**

An Arcade Particle system is built-in, which allows you to create fun particle effects easily. Create explosions or constant streams for effects like rain or fire. Or attach the Emitter to a Sprite for a jet trail.

**Camera**

Phaser has a built-in Game World. Objects can be placed anywhere within the world and you've got access to a powerful Camera to look into that world. Pan around and follow Sprites with ease.

**Input**

Talk to a Phaser.Pointer and it doesn't matter if the input came from a touch-screen or mouse, it can even change mid-game without dropping a beat. Multi-touch, Mouse, Keyboard and lots of useful functions allow you to code custom gesture recognition.

**Sound**

Phaser supports both Web Audio and legacy HTML Audio. It automatically handles mobile device locking, easy Audio Sprite creation, looping, streaming and volume. We know how much of a pain dealing with audio on mobile is, so we did our best to resolve that!

**Tilemaps**

Phaser can load, render and collide with a tilemap with just a couple of lines of code. We support CSV and Tiled map data formats with multiple tile layers. There are lots of powerful tile manipulation functions: swap tiles, replace them, delete them, add them and update the map in realtime.

**Device Scaling**

Phaser has a built-in Scale Manager which allows you to scale your game to fit any size screen. Control aspect ratios, minimum and maximum scales and full-screen support.

**Plugin system**

We are trying hard to keep the core of Phaser limited to only essential classes, so we built a smart Plugin system to handle everything else. Create your own plugins easily and share them with the community.

**Mobile Browser**

Phaser was built specifically for Mobile web browsers. Of course it works blazingly fast on Desktop too, but unlike lots of frameworks mobile was our main focus. If it doesn't perform well on mobile then we don't add it into the Core.

**Developer Support**

We use Phaser every day on our many client projects. As a result it's constantly evolving and improving and we jump on bugs and pull requests quickly. This is a living, breathing framework maintained by a commercial company with custom feature development and support packages available. We live and breathe HTML5 games.

**Battle Tested**

Phaser has been used to create hundreds of games, which receive millions of plays per month. We're not saying it is 100% bug free, but we use it for our client work every day, so issues get resolved <em>fast</em> and we stay on-top of the changing browser landscape.

![FruitParty](http://www.photonstorm.com/wp-content/uploads/2013/10/phaser_fruit_particles-640x480.png)

![div](http://phaser.io/images/div6.png)

<a name="road-map"></a>
## Road Map

Here are some of the features planned for future releases:

### Version 2.2 ("Tarabon")

* Look at HiDPI Canvas settings.
* Enhance the State Management, so you can perform non-destructive State swaps and persistence.
* Scene Manager - json scene parser.
* Adjust how Pointers and Interactive Objects work. Allow an IO to be flagged as "on click only", so it doesn't ever get processed during normal Pointer move events (unless being dragged)
* Allow multiple drag items - no longer bind just 1 to a Pointer
* Allow Groups to have Priority IDs too and input disable entire Groups and all children (let it flow down the chain)
* Allow Groups to be InputEnabled? Dragging a Group would be really useful.
* Ability to control DOM elements from the core game and layer them into the game.
* Touch Gestures.
* Optimised global Animation manager to cut down on object creation.
* Swapping to using a RenderTexture for the Tilemaps and implementing Tilemap slicing.

### Version 2.3 ("Illian") and Beyond

* Look carefully at the internal structure of Phaser to avoid method repetition (such as Sprite.crop and Image.crop), investigate using mixins to help reduce overall codebase size.
* Flash CC HTML5 export integration.
* Massively enhance the audio side of Phaser. Take more advantage of Web Audio: echo effects, positional sound, etc.
* Comprehensive testing across Firefox OS devices, CocoonJS and Ejecta.
* Support for parallel asset loading.
* DragonBones support.
* Integration with third party services like Google Play Game Services and Amazon JS SDK.
* Test out packaging with Node-webkit.
* Game parameters stored in Google Docs.
* Multiple Camera support.
* Cache to localStorage using If-Modified-Since. [See github request](https://github.com/photonstorm/phaser/issues/495)
* Allow for complex assets like Bitmap Fonts to be stored within a texture atlas.

### Phaser 3

Phaser 3 has entered the planning stages. Development will not begin until early 2015, but we are already asking for suggestions and feedback in [this forum thread](http://www.html5gamedevs.com/topic/7949-the-phaser-3-wishlist-thread/). We are currently experimenting with a fully ES6 based module system and we're keen for Phaser 3 to use as many native ES6 features as possible and where sensible. It will be a significant refactoring of the code base, but not at the expense of features or ease-of-use.

![div](http://phaser.io/images/div1.png)

<a name="mighty-editor"></a>
## Mighty Editor - A Visual Phaser Game Editor

[MightyEditor](http://mightyfingers.com/) is a browser-based visual Phaser game editor. Create your maps with ease, position objects and share them in seconds. It also exports to native Phaser code. Excellent for quickly setting-up levels and scenes.

![div](http://phaser.io/images/div2.png)

<a name="contributing"></a>
## Contributing

We now have a full [Contributors Guide][contribute] which goes into the process in more detail, but here are the headlines:

- If you find a bug then please report it on [GitHub Issues][issues] or our [Support Forum][forum].

- If you have a feature request, or have written a game or demo that shows Phaser in use, then please get in touch. We'd love to hear from you! Either post to our [forum][forum] or email: rich@photonstorm.com

- If you issue a Pull Request for Phaser, please only do so againt the `dev` branch and *not* against the `master` branch.

- Before submitting a Pull Request please run your code through [JSHint](http://www.jshint.com/) to check for stylistic or formatting errors. To use JSHint, run `grunt jshint`. This isn't a strict requirement and we are happy to receive Pull Requests that haven't been JSHinted, so don't let it put you off contributing, but do know that we'll reformat your source before going live with it.

[![Build Status](https://travis-ci.org/photonstorm/phaser.png?branch=dev)](https://travis-ci.org/photonstorm/phaser)

![div](http://phaser.io/images/div3.png)

<a name="bugs"></a>
## Bugs?

Please add them to the [Issue Tracker][issues] with as much info as possible, especially source code demonstrating the issue.

![Phaser Tilemap](http://www.photonstorm.com/wp-content/uploads/2013/04/phaser_tilemap_collision.png)

"Being negative is not how we make progress" - Larry Page, Google

![div](http://phaser.io/images/div4.png)

<a name="license"></a>
## License

Phaser is released under the [MIT License](http://opensource.org/licenses/MIT).

[issues]: https://github.com/photonstorm/phaser/issues
[contribute]: https://github.com/photonstorm/phaser/blob/master/CONTRIBUTING.md
[phaser]: https://github.com/photonstorm/phaser
[forum]: http://www.html5gamedevs.com/forum/14-phaser/

[![Analytics](https://ga-beacon.appspot.com/UA-44006568-2/phaser/index)](https://github.com/igrigorik/ga-beacon)
