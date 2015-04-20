<?php

header('Content-Type: application/json');

echo json_encode([

    'columns' => [
        [
            'title' => 'Name',
            'key'   => 'name'
        ],
        [
            'title' => 'City',
            'key'   => 'city'
        ],
        [
            'title' => 'Age',
            'key'   => 'age'
        ],
        [
            'title' => 'Actions',
            'key'   => 'action.activities'
        ]
    ],

    'rows'    => [
        [
            'name' => 'John Smith',
            'city' => 'New York',
            'age'  => 21
        ],
        [
            'name' => 'Joe Doe',
            'city' => 'Chicago',
            'age'  => 25
        ],
        [
            'name' => 'John Doe',
            'city' => 'Paris',
            'age'  => 27
        ]
    ]
]);