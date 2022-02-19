import React from 'react';
import { useNavigate } from 'react-router-dom';
import { noEnoughCourses, noMainCourses } from '../../logic/logic';
import { COLOURS } from '../../utils/colours.const';
import { MAIN_COURSE_ERROR, TWO_COURSE_ERROR } from '../../utils/errors.const';
import './Party.scss';

const Party = ({ diner, currentGuest, guests, bill, selectGuest, showError }) => {
    const navigate = useNavigate();
    const isSelected = (i) => currentGuest === i + 1;

    const guestTemplate = (limit) =>
        new Array(limit).fill('_').map((_, index) => (
            <button
                key={index}
                className={`${isSelected(index) ? 'selected' : ''}`}
                style={{ backgroundColor: ` ${isSelected(index) ? COLOURS[index] : 'transparent'}` }}
                onClick={() => {
                    selectGuest(index + 1);
                }}
            >
                {`Guest ${index + 1}`}
            </button>
        ));

    const onCheckout = () => {
        if (noMainCourses(diner)) {
            showError(MAIN_COURSE_ERROR);
        } else if (noEnoughCourses(diner)) {
            showError(TWO_COURSE_ERROR);
        } else {
            navigate('/bill');
        }
    };

    return (
        <section className="party">
            <div className="party__guests">{guestTemplate(guests)}</div>
            <div className={`party__bill ${bill ? 'show' : ''}`}>£ {bill}</div>
            <button className={`party__checkout ${bill ? 'show' : ''}`} onClick={onCheckout}>
                Checkout
            </button>
        </section>
    );
};

export default Party;
