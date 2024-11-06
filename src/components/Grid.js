import React from 'react';

//הצגת הלוח
const Grid=({grid, ant})=>{

    //ציור הלוח
    return(
        <div style={{
            display:'grid',
            gridTemplateColumns: `repeat(${grid[0].length}, 30px)`

        }}>

            {grid.map((row, rowIndex)=>//עובר על הלוח
            row.map((cell, colIndex)=>(
                <div key={`${rowIndex}-${colIndex}`} 
                style={{
                    width: 30,
                    height:30,
                    backgroundColor: ant.x==colIndex && ant.y==rowIndex
                    ?'red':cell ? 'black' : 'white',
                    border: '1px solid gray'
                }} />
            ))
            )}

        </div>

    );
};
export default Grid;
