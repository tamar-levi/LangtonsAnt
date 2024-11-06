//יצירת הלוח ואיתחולו בfalse
export const initializeGrid =(numRows, numCols)=>{
    return Array(numRows).fill().map(()=> Array(numCols).fill(false));

};

//פונקציה המטפלת בתנועת הנמלה 
export const moveAnt=(grid,ant,blackCount,numRows,numCols)=>{
    const directions= [
        {dx:0, dy: -1},//למעלה
        {dx:1, dy:0},//ימינה
        {dx:0, dy:1},//למטה
        {dx:-1, dy:0},//שמאלה

    ];

    const newGrid= grid.map(row=> [...row]);//העתקת הלוח
    const {x,y,dir}=ant;// מיקום וכיון נמלה
    const currentColor=newGrid[x][y];//צבע המשבצת

    newGrid[x][y]=!currentColor;

    const newBlackCount= currentColor? blackCount-1:blackCount+1;

    const newDir =(dir+(currentColor? -1:1)+4)%4;//עידכון כיוון הנמלה
    const {dx,dy}=directions[newDir];//שינוי בכייון
    const newX= (x+dx+numCols)% numCols;
    const newY= (y+dy+numRows)% numRows;

    const newAnt ={
        x: newX,
        y:newY,
        dir:newDir
    };
    return {newGrid,newAnt,newBlackCount};


};