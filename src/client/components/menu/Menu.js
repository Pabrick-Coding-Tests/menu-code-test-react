import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import DishConnector from '../dish/Dish.connector';
import { MENU_QUERY } from './../../querys/menu.query';
import './Menu.scss';

const Menu = ({ guests, diner, setEmptyDiner }) => {
    const { data } = useQuery(MENU_QUERY);

    useEffect(() => {
        if (diner.length === 0) {
            setEmptyDiner(guests);
        }
    }, []);

    const dishTemplate = (list) =>
        list.map(({ id, name, price }) => (
            <li key={id}>
                <DishConnector id={id} name={name} price={price} />
            </li>
        ));

    const courseTemplate = (title, list) => (
        <article className="course">
            <h2 className="course__title">{title}</h2>
            <ul className="course__list">{dishTemplate(list)}</ul>
        </article>
    );

    const menuTemplate = () => {
        if (data) {
            return (
                <div>
                    {courseTemplate('Starters', data.menu.starters)}
                    <hr></hr>
                    {courseTemplate('Mains', data.menu.mains)}
                    <hr></hr>
                    {courseTemplate('Desserts', data.menu.desserts)}
                </div>
            );
        }
    };

    return (
        <section className="menu">
            <h1 className="menu__title">'Le Menu'</h1>
            <div className="menu__courses">{menuTemplate()}</div>
        </section>
    );
};

export default Menu;
