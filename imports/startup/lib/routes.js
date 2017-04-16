import React from 'react';
import collections from './collections';
import CollectionPage from '../../ui/pages/CollectionPage';

const routes = [
    {
        path: '/',
        exact: true,
        title: 'Home',
        main: () => <CollectionPage collection={collections.Pets} collectionName="Pets"/>
    },
    {
        path: '/owners',
        title: 'Owners/customers',
        main: () => <CollectionPage collection={collections.Owners} collectionName="Owners"/>
    },
    {
        path: '/pets',
        title: 'Pets',
        main: () => <CollectionPage collection={collections.Pets} collectionName="Pets"/>
    },
    {
        path: '/petTypes',
        title: 'Pet types',
        main: () => <CollectionPage collection={collections.Types} collectionName="Types"/>
    },
    {
        path: '/vets',
        title: 'Veterinaries',
        main: () => <CollectionPage collection={collections.Vets} collectionName="Vets"/>
    },
    {
        path: '/specialties',
        title: 'Specialties',
        main: () => <CollectionPage collection={collections.Specialties} collectionName="Specialties"/>
    },
    {
        path: '/visits',
        title: 'Visits',
        main: () => <CollectionPage collection={collections.Visits} collectionName="Visits"/>
    }
]

export default routes;
