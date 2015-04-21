<?php

header('Content-Type: application/json');

echo json_encode([

    'columns' => [
        [
            'title'      => 'Name',
            'key'        => 'name',
            'isSortable' => true
        ],
        [
            'title' => 'Age',
            'key'   => 'age'
        ],
        [
            'title' => 'City',
            'key'   => 'city'
        ],
        [
            'title' => 'Country',
            'key'   => 'country'
        ],
        [
            'title' => 'Actions',
            'key'   => 'action',
        ]
    ],

    'rows'    => [
        [
            'id'      => 1,
            'name'    => 'John Smith',
            'city'    => 'New York',
            'country' => 'US',
            'age'     => 21,
            'action'  => true
        ],
        [
            'name'    => 'Joe Doe',
            'city'    => 'Chicago',
            'country' => 'US',
            'age'     => 25,
            'action'  => true,
        ],
        [
            'name'    => 'John Doe',
            'city'    => 'Paris',
            'country' => 'France',
            'age'     => 27,
            'action'  => true
        ]
    ]
]);