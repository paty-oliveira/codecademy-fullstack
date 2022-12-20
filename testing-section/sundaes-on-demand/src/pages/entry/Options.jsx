import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import Row from 'react-bootstrap/Row';
import AlertBanner from '../common/AlertBanner';

export default function Options({optionType}) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
        .then(response => setItems(response.data))
        .catch((error) => setError(true))
    }, [optionType]);

    if (error) {
        return <AlertBanner/>
    }

    const ItemComponent = optionType === 'scoops' ? ScoopOption: ToppingOption;

    const optionsItems = items.map((item) =>
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />);

    return <Row>{optionsItems}</Row>
}