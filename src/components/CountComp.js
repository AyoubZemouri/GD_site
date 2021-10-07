import React from 'react'
import CountUp from 'react-countup';

export const CountComp = () => {
    return (
        <div className="countup">
            <section className="counter red"><CountUp end={200} duration={3} delay={2} /></section>
            <section className="counter blue"><CountUp end={1256000} duration={3} separator=" " delay={2} /></section>
            <section className="counter yellow"><CountUp end={20} duration={3} delay={2} /></section>
            
            <section className="description">CLIENTS SATISFAITS</section>
            <section className="description">FEUILLES IMPRIMÉES</section>
            <section className="description">ANNÉES D'EXPÉRIENCE</section>
            
        </div>
    )
}

export default CountComp