import React, {useState, createContext, useContext} from "react";
export const CounterContext = createContext();
export const TimeCounterContext = createContext();
export const CounterProvider = props => {

    const [count, setCount] = useState(0);

    return <CounterContext.Provider value={[count, setCount]} {...props} />;

};

export const useCounterStore = () => useContext(CounterContext);

export const TimeCounterProvider = props => {

    const [timeCount, setTimeCount] = useState();
    
    return <TimeCounterContext.Provider value={[timeCount, setTimeCount]} {...props} />;

};

export const useTimeCounterStore = () => useContext(TimeCounterContext);