import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

const MENU_QUERY = gql`
    {
        menu {
            starters {
                id
                name
                price
            }
            mains {
                id
                name
                price
            }
            desserts {
                id
                name
                price
            }
        }
    }
`;

const Menu = () => {
    const { data, loading, error } = useQuery(MENU_QUERY);

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.log('error', error.message);
    }

    console.log('data', data);

    const dishList = (list) =>
        list.map(({ id, name, price }) => (
            <div key={id}>
                <p>
                    {id}: {name} / {price}
                </p>
            </div>
        ));

    if (data) {
        return (
            <main>
                <h1>Menu Test</h1>
                <h2>Starters</h2>
                {dishList(data.menu.starters)}
                <hr></hr>
                <h2>Mains</h2>
                {dishList(data.menu.mains)}
                <hr></hr>
                <h2>Desserts</h2>
                {dishList(data.menu.desserts)}
                <hr></hr>
                <Link to="/bill">Check the bill</Link>
            </main>
        );
    }

    return (
        <main>
            <h1>Menu Test</h1>
        </main>
    );
};

export default Menu;
