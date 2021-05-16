import React, { useState, useEffect, useRef } from 'react';
import { Keyboard } from 'react-native';

import { db } from '../../Config/firebase';

import Screen from '../../Components/Screen';
import SearchBar from './SearchBar';
import NamesBox from './NamesBox';
import LocationDetails from './LocationDetails/LocationDetails';

const locs = [
    {
        address: '7373 West Florida Avenue, Lakewood, CO, USA',
        lat: '234',
        lng: '234',
        name: 'grege',
        owner: 'grgre',
    },
    {
        address: '9197 West 6th Avenue, Lakewood, CO, USA',
        lat: '444',
        lng: '898.9',
        name: 'Johnson',
        owner: 'Baluga',
    },
    {
        address: '7877 Elmwood Lane, Denver, CO, USA',
        lat: '7645',
        lng: '23432',
        name: 'Old House',
        owner: 'Eric',
    },
    {
        address: '9760 Grant Street, Thornton, CO, USA',
        lat: '9965',
        lng: '3465',
        name: 'Some address',
        owner: 'Some Dude',
    },
    {
        address: '5280 Astrozon Boulevard, Colorado Springs, CO, USA',
        lat: '999',
        lng: '888',
        name: 'Somewhere South',
        owner: 'Who Knows',
    },
    {
        address: '3430 Ohio Health Parkway, Columbus, OH, USA',
        lat: '5252',
        lng: '232523',
        name: 'Unarchived Spot',
        owner: 'Jobe Himself',
    },
    {
        address: '862 Wolff Street, Denver, CO, USA',
        archived: false,
        lat: '7541',
        lng: '7544',
        name: 'Unarchived Spot 2',
        owner: 'Blah Blah',
    },
    {
        address: '12201 West 2nd Place, Lakewood, CO, USA',
        lat: '456',
        lng: '654',
        name: 'Apartment Denver',
        owner: 'Sawyer & Erin',
    },
    {
        address: '9197 West 6th Avenue, Lakewood, CO, USA',
        archived: false,
        lat: '',
        lng: '',
        name: 'New Location',
        owner: 'Sawyer',
    },
    {
        address: '12201 Cross Peak View, Colorado Springs, CO, USA',
        lat: '542',
        lng: '23324',
        name: 'Cross View Peak',
        owner: 'Jess',
    },
];

const UserInfo = () => {
    const [search, setSearch] = useState('');
    const [searchActive, setSearchActive] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [filteredNames, setFilteredNames] = useState([]);
    const listRef = useRef(null);

    useEffect(() => {
        if (!listRef.current) {
            // db.collection('locationList')
            //     .doc('list')
            //     .get()
            //     .then((res) => {
            // if (res.exists) {
            if (locs) {
                listRef.current = locs;
                // res.data().locations.forEach((i) => names.push({ title: i.name, key: i.name }));
                // listRef.current = { locNames: names, locations: res.data().locations };
                setFilteredNames(locs);
            }
            // });
        }
    }, []);

    const searchHandler = (text) => {
        setSearch(text);

        if (text.length) {
            const val = text.toLowerCase();
            const newFilter = listRef.current.filter(
                (i) =>
                    i.name.toLowerCase().includes(val) ||
                    i.address.toLowerCase().includes(val) ||
                    i.owner.toLowerCase().includes(val)
            );
            setFilteredNames(newFilter);
        } else {
            const copy = [...listRef.current];
            setFilteredNames(copy);
        }
    };

    const getLocation = async (location) => {
        setSearchActive(false);
        setSearch(location);
        const res = await db.collection('locations').doc(location).get();

        if (res.exists) {
            setSelectedLocation(res.data());
        }
    };

    const toggleSearch = () => {
        if (searchActive) {
            Keyboard.dismiss();
            setSearchActive(false);
        } else {
            setSearchActive(true);
        }
    };

    return (
        <Screen>
            <SearchBar
                search={search}
                setSearch={searchHandler}
                searchIsActive={searchActive}
                toggleSearch={toggleSearch}
            />
            {filteredNames.length > 0 && searchActive && (
                <NamesBox locations={filteredNames} getLocation={getLocation} />
            )}
            {selectedLocation && <LocationDetails loc={selectedLocation} />}
        </Screen>
    );
};

export default UserInfo;
