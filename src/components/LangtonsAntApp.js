
//קומפוננטה שאחראית על הכל!!

import React, {useState, useEffect} from 'react';
import Grid from './Grid';
import InfoPanel from './InfoPanel';
import {initializeGrid, moveAnt} from './AntLogic';

const numRows=15;
const numCols=15;
const maxSteps=100000;//כמות הצעדים המקסימלי

const LangtonsAntApp=()=>{
    //אתחול הלוח
  const [grid, setGrid] = useState( initializeGrid(numRows,numCols));

  //מיקום התחלתי לנמלה
  const [ant, setAnt]= useState({
    x: Math.floor(numCols/2),//במיקום X באמצע הלוח
    y: Math.floor(numRows/2),
    dir:0 // כיוון הנמלה. 0= למעלה 1= ימינה 2= למטה 3= שמאלה
  });

  //ספירת צעדים
  const[ steps , setSteps]= useState(0);
  //כמות המשבצות השחורות
  const [blackCount, setBlackCount]= useState(0);

  useEffect(()=>{
    if(steps>=maxSteps) return; //תנאי עצירה

    const interval =setInterval(()=>{
        setSteps(prev=>prev+1); //עדכון הצעדים
        //צעד אחד של הנמלה ועידכון מצב הלוח והנמלה
        const {newGrid, newAnt, newBlackCount}= moveAnt(grid,ant,blackCount,numRows,numCols);

        //עידכונים
        setGrid(newGrid);
        setAnt(newAnt);
        setBlackCount(newBlackCount);

    },100);// כל 100 מילישניות

    return ()=> clearInterval(interval);// ניקוי
  }, [grid,ant,steps,blackCount]);

  return(
    <div>
        <h2> Langton's Ant Simulation</h2>
        <InfoPanel steps={steps} maxSteps={maxSteps} blackCount={blackCount}/>
        <Grid grid={grid} ant={ant} />
    </div>

  );


};
export default LangtonsAntApp;//יצוא
