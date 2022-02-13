import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import MenuDishButton from './../menu-dish-button/MenuDishButton';
import { MENU_QUERY } from './menu.query.js';

const PEOPLE_PARTY = 2;

const Menu = () => {
    const { data, loading, error } = useQuery(MENU_QUERY);

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.log('error', error.message);
    }

    const dishList = (list) =>
        list.map(({ id, name, price }) => (
            <li key={id}>
                <MenuDishButton id={id} name={name} price={price} />
            </li>
        ));

    const courseList = (title, list) => (
        <div className="course">
            <h2 className="course__title">{title}</h2>
            <ul className="course__list">{dishList(list)}</ul>
        </div>
    );

    const menuTemplate = () => {
        if (data) {
            return (
                <div>
                    {courseList('Starters', data.menu.starters)}
                    <hr></hr>
                    {courseList('Mains', data.menu.mains)}
                    <hr></hr>
                    {courseList('Desserts', data.menu.desserts)}
                </div>
            );
        }
    };

    return (
        <main>
            <section className="menu">
                <h1 className="menu__title">'Le Menu'</h1>
                <div className="menu__courses">{menuTemplate()}</div>
            </section>
            <section className="party">
                <Link to="/bill">Check the bill</Link>
            </section>
        </main>
    );
};

export default Menu;
