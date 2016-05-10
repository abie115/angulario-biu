export class SetData {
    createDb() {
        let sets = [
            {
                "id": 1,
                "name": "zestaw1",
                "word": [{
                    "eng": "egg",
                    "pl": "jajko"
                }, {
                        "eng": "banana",
                        "pl": "banan"
                    }]
            },
            {
                "id": 2,
                "name": "zestaw2",
                "word": [{
                    "eng": "price",
                    "pl": "cena"
                }, {
                        "eng": "shop",
                        "pl": "sklep"
                    }, {
                        "eng": "low",
                        "pl": "niski"
                    }]
            }
        ];
        return { sets };
    }
}