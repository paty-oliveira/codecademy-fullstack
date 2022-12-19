import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';
import Row from 'react-bootstrap/Row';

export default function Options({optionType}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
        .then(response => setItems(response.data))
        .catch((error) => {})
    }, [optionType]);

    // TODO: Replace null with ToppingOption when available
    const ItemComponent = optionType === 'scoops' ? ScoopOption: null;

    const optionsItems = items.map((item) =>
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />);

    return <Row>{optionsItems}</Row>
}