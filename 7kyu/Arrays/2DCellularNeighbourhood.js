const get_neighbourhood = function(type, arr, [y,x]){
    if ( !arr[y] || arr[y][x] === undefined ) 
      return [];
    const arrType = type === 'moore' ? [[y-1, x-1], [y-1, x], [y-1, x+1], [y, x-1], [y, x+1], [y+1, x-1], [y+1, x], [y+1, x+1]] : [[y, x-1], [y, x+1], [y-1, x], [y+1, x]];
    
    return arrType.filter(([a, b])=> arr[a] && arr[a][b] !== undefined ).map(([e1,e2])=>arr[e1][e2]).sort((a, b)=> a < b);
  }