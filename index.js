const maze = [
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let mazeBox = document.querySelector("#mazeBox");

const mazeBuilder = function(maze){
  for (let i = 0; i < maze.length; i++){
    let mazeRow = $("<div>").addClass("mazeRow");
    console.log(maze[i]);
    for (let j = 0; j < maze[i].length; j++){
      console.log(maze[i][j]);
      let mazeBlock = $("<div>").attr('id', i + "_" + j).addClass("mazeBlock")
      if (maze[i][j] === 1){
        mazeBlock.addClass("wall")
      }
      mazeRow.append(mazeBlock);
    }
    mazeBox.append(mazeRow[0])
  }
};


mazeBuilder(maze);
