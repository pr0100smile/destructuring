import destructuring from '../app.js';

test('Sorting the properties of objects', () => {
    const obj = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
            },
        ],
    };
    expect(destructuring(obj)).toEqual(
        [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: 'Описание засекречено',
            },
        ],
    );
});

test('Sorting properties of objects', () => {
    const obj = {
        name: 'Лучник',
        age: 33,
    };
    expect(destructuring(obj)).toEqual([]);
});
