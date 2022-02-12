import { gql, useQuery } from '@apollo/client';
import React from 'react';

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

const Root = () => {
    const { data, loading, error } = useQuery(MENU_QUERY);

    if (loading) {
        console.log('loading');
    }

    if (error) {
        console.log('error', error.message);
    }

    console.log('data', data);

    if (data) {
        return data.menu.starters.map(({ id, name, price }) => (
            <div key={id}>
                <p>
                    {id}: {name} / {price}
                </p>
            </div>
        ));
    }

    return (
        <main>
            <h1>Menu Test</h1>
        </main>
    );
};

export default Root;
