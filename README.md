# Pacman Game

This is just a side project to try out a few new technologies like es modules and to try and make a game using pixi.js.

# Run App

Make sure you have a static server like `serve` and also `yarn` installed globally.

```
npm i serve -g
npm i yarn -g
```

Install deps

```
yarn install
```

Then start your server.

```
serve
```

Open url it gives you in a [browser that supports es modules](http://caniuse.com/#feat=es6-module) like chrome 61 or safari 10.1.

# Why pixi.js?

pixijs.com is an html5 creation engine that supports 2D WebGL with canvas fallback. It has quite a few stars on github. The docs, examples and api seem pretty good and I like it's website better than phaser.io. Therefore I picked it. :)

# Stuff to Figure out

## Phase 1

- [ ] Animating Pacman
- [ ] How to move Pacman
- [ ] How walls and barriers work
- [ ] Capturing/Counting pills
- [ ] Set up world/scene
- [ ] Sounds

## Phase 2

- [ ] Animate bad guys
- [ ] work on algorithm for moving bad guys
- [ ] point system for pacman

## Phase 3

- [ ] Ghost mode (when pacman gets a big pill)
- [ ] Other stuff I have no idea about
