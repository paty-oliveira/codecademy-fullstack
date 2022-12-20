import Options from './Options';

export default function OrderEntry(params) {
    return (
        <div>
            <Options optionType="scoops"/>
            <Options optionType="toppings" />
        </div>
    )
}