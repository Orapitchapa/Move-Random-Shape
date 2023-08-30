import { useState } from 'react';
import { Button } from 'antd';
import './Styles.scss';

const LayoutAndStyle = () => {
    const [shapes, setShapes] = useState([
        'circle',
        'square',
        'parallelogram',
        'ellipse',
        'trapezoid',
        'rectangle',
    ]);
    const [isTopRow, setIsTopRow] = useState(true);

    const moveShapesLeft = () => {
        const movedShapes = [...shapes];
        movedShapes.push(movedShapes.shift()!);
        setShapes(movedShapes);
    };

    const moveShapesRight = () => {
        const movedShapes = [...shapes];
        const removedShape = movedShapes.pop();
        movedShapes.unshift(removedShape!);
        setShapes(movedShapes);
    };

    const movePositions = () => {
        setIsTopRow(!isTopRow);
    };

    const randomizePositions = () => {
        const shuffledShapes = [...shapes];
        for (let i = shuffledShapes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledShapes[i], shuffledShapes[j]] = [shuffledShapes[j], shuffledShapes[i]];
        }
        setShapes(shuffledShapes);
    };

    return (
        <>
            <div className="button-row" style={{ marginTop: 50 }}>
                <Button className='buttonh' onClick={moveShapesLeft} style={{ width: 230, height: 150, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ marginLeft: 40 }} className={`right-triangle`}></div>
                    <div className='pill'>Move shape</div>
                </Button>
                <Button className='buttonh' onClick={movePositions} style={{ width: 500, height: 150, justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: 80, marginRight: 100 }} className={`triangle`}></div>
                        <div className={`upside-down-triangle`}></div>
                    </div>
                    <div className='pill'>Move Position</div>
                </Button>
                <Button className='buttonh' onClick={moveShapesRight} style={{ width: 230, height: 150, marginLeft: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ marginLeft: 60 }} className={`left-triangle`}></div>
                    <div className='pill'>Move shape</div>
                </Button>
            </div>
            <div style={{ marginTop: 50 }} className={isTopRow ? 'button-row top-row' : 'button-row bottom-row'}>
                {shapes.slice(0, 3).map((shape, index) => (
                    <Button
                        onClick={randomizePositions}
                        key={index}
                        className={`buttonh`}
                        style={{ width: 230, height: 150, marginLeft: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <div className={`${shape}`}></div>
                    </Button>
                ))}
            </div>
            <div style={{ marginTop: 10 }} className={!isTopRow ? 'button-row top-row' : 'button-row bottom-row'}>
                {shapes.slice(3, 6).map((shape, index) => (
                    <Button
                        onClick={randomizePositions}
                        key={index}
                        className={`buttonh`}
                        style={{ width: 230, height: 150, marginLeft: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <div className={` ${shape}`}></div>
                    </Button>
                ))}
            </div>
        </>
    );
};

export default LayoutAndStyle;
