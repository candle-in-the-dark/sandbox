var mazeGen = require('@sbj42/maze-generator');

// generate a 20x20 maze
var maze = mazeGen.generate(20, 20, {
    generator: '@sbj42/maze-generator-backtrack'
});

// get the north-east corner cell of the maze
var cell = maze.cell(0, 0);

console.log(maze);
