import React, {useState} from 'react';
import styles from './Counter.module.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <div className={styles.container} style={{backgroundColor: 'black',
                width: '20%',
                height: '20%',
                textAlign: "center",
                color: 'white'}}>
                {counter}
            </div>

            <div className={styles.container} style={{
                width: '20%',
                height: '20%',
                borderRadius: 25,
                backgroundColor: "red",
                textAlign: "center",
                color: 'white',
                cursor: "pointer",
            }}
                 onClick={()=>setCounter((prev)=>prev+ 1)}
            >Count</div>
        </>
    );
};

export default Counter;