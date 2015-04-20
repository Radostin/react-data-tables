<?php

header('Content-Type: application/json');

echo json_encode([

    'columns' => [
        [
            'title' => 'Name'
        ],
        [
            'title' => 'City'
        ],
        [
            'title' => 'Age'
        ],
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
        ]
    ]
]);