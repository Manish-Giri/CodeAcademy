// Alright! You've learned how to use require to import a file into a different file.
//
// But you don't want to import a whole file! NavBar.js isn't really what you're looking for. You just want to the NavBar component class, so that you can render a <NavBar /> instance.
//
// What you need is a way to import only a specific part of a file into another file.
//
// The answer is something called module.exports. module.exports comes from Node.js's module system, just like require does. module.exports and require are meant to be used together, and you basically never see one without the other.
//
// Here's how you use module.exports:
//
// In one file, declare module.exports to be equal to an expression. It could be any expression you want:

// Manifestos.js:

var faveManifestos = {
  futurist: 'http://bit.ly/1lKuB2I',
  SCUM:     'http://bit.ly/1xWjvYc',
  cyborg:   'http://bit.ly/16sbeoI'
};

module.exports = faveManifestos;
// In a different file, use require to import the first file. require won't return the entire first file; it will return the first file's module.exports value!
//
// App.js:

// Link to the Futurist Manifesto:

console.log(require('./Manifestos').futurist);
// module.exports means, "If you require the file that I am in, then here's what you're going to get!"
// Instructions
// 1.
// Select NavBar.js.
//
// At the bottom of the file, add the line module.exports = NavBar;
//
// Now, when ProfilePage.js uses require to import NavBar.js, it will get back exactly what it wants: the NavBar component class.
