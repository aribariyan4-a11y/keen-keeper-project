"use client";

import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {

    const [timeline, setTimeline] = useState([]);

    const addTimeline = (newItem) => {
        setTimeline((prev) => [newItem, ...prev]);
    };

    return (
        <TimelineContext.Provider value={{ timeline, addTimeline }}>
            {children}
        </TimelineContext.Provider>
    );
}

export function useTimeline() {
    return useContext(TimelineContext);
}