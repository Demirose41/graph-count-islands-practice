function getNeighbors1(row, col, matrix) {

  const neighbors = []
  // Check top
  let cord = [row - 1, col]
  if(row != 0 &&  _isOne(cord, matrix)) neighbors.push(cord)
  // Check top right
  cord = [row - 1, col + 1]
  if(row != 0 && col != matrix[0].length - 1 && _isOne(cord, matrix)) neighbors.push(cord)
  // Check right
  cord = [row, col + 1]
  if(col != matrix[0].length && _isOne(cord, matrix)) neighbors.push(cord)
  // Check bottom right
  cord = [row + 1, col + 1]
  if(row != matrix.length - 1 && col != matrix[0].length && _isOne(cord, matrix)) neighbors.push(cord)
  // Check bottom
  cord = [row + 1, col]
  if(row != matrix.length && _isOne(cord, matrix)) neighbors.push(cord)
  // Check bottom left
  cord = [row + 1, col - 1]
  if(row != matrix.length - 1 && col != 0 && _isOne(cord, matrix)) neighbors.push(cord)
  // Check left
  cord = [row - 1, col]
  if(col != 0 && _isOne(cord, matrix)) neighbors.push(cord)
  // Check top left
  cord = [row - 1, col - 1]
  if(row != 0 && col != 0 && _isOne(cord, matrix)) neighbors.push(cord)
  // Return neighbors
  
  return neighbors
  // Your code here
}

function getNeighbors(row, col, matrix) {

  const neighbors = []
  // Check top left
  let cord = [row - 1, col - 1]
  if(row != 0 && col != 0 && _isOne(cord, matrix)) neighbors.push(cord)
  // Check top
  cord = [row - 1, col]
  if(row != 0 &&  _isOne(cord, matrix)) neighbors.push(cord)
  // Check top right
  cord = [row - 1, col + 1]
  if(row != 0 && col != matrix[0].length - 1 && _isOne(cord, matrix)) neighbors.push(cord)
  // Check right
  cord = [row, col + 1]
  if(col != matrix[0].length - 1 && _isOne(cord, matrix)) neighbors.push(cord)
  // Check bottom right
  cord = [row + 1, col + 1]
  if(row != matrix.length - 1 && col != matrix[0].length - 1 && _isOne(cord, matrix)) neighbors.push(cord)
  // Check bottom
  cord = [row + 1, col]
  if(row != matrix.length - 1 && _isOne(cord, matrix)) neighbors.push(cord)
  // Check bottom left
  cord = [row + 1, col - 1]
  if(row != matrix.length - 1 && col != 0 && _isOne(cord, matrix)) neighbors.push(cord)
  // Check left
  cord = [row , col - 1]
  if(col != 0 && _isOne(cord, matrix)) neighbors.push(cord)
  // Return neighbors
  return neighbors
  // Your code here
}

function _isOne(cord, matrix){
  return matrix[cord[0]][cord[1]] === 1
}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  // Your code here

  const visited = new Set()
  let count = 0;
  for(let x = 0; x < matrix.length ; x++){
    for(let y = 0; y < matrix[0].length; y++){
      let cord = [x,y]
      if(!visited.has(_toString(cord))){
        let stack = [cord]  
        visited.add(_toString(cord))
        if(matrix[cord[0]][cord[1]] === 0) continue
        // if(matrix[cord[0]][cord[1]] === 1){
        //   count++
        //   continue
        // }
        while(stack.length > 0){
          let current = stack.pop()

          let neighbors = getNeighbors(current[0],current[1], matrix)
          for(const neighbor of neighbors){
            if(!visited.has(_toString(neighbor))){
              visited.add(_toString(neighbor))
              stack.push(neighbor)
            }
          }
        }
      count++
      }
      
    }
  }
  return count;
}

function _toString(cord){
  return `${cord[0]},${cord[1]}`
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];