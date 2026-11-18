import {createContext, useContext} from 'react';
import {useReducedMotion} from 'framer-motion';

export const MotionPausedContext = createContext(null);
export function useStaticMotion() {
 const preference = useReducedMotion();
 return useContext(MotionPausedContext) ?? preference;
}
