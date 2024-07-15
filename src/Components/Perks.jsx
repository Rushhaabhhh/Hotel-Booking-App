export default function Perks({selected , onChange }) {
    function handleClick(e) {
        const {checked, name} = e.target;
        if(checked) {
            onChange([...selected, name]);
        } else {
            onChange(selected.filter(selectedName => selectedName !== name));
        }
    }
    return (
        <>
        <label>
            <input type="checkbox" name="wifi" checked={selected.includes('wifi')} onChange={handleClick} />
            <span> Wifi </span>
        </label>

        <label>
            <input type="checkbox" name="parking" checked={selected.includes('parking')} onChange={handleClick} />
            <span> Free Parking </span>
        </label>

        <label>
            <input type="checkbox" name="tv" checked={selected.includes('tv')} onChange={handleClick} />
            <span> TV </span>
        </label>

        <label>
            <input type="checkbox" name="radio" checked={selected.includes('radio')} onChange={handleClick} />
            <span> Radio </span>
        </label>

        <label>
            <input type="checkbox" name="pets" checked={selected.includes('pets')} onChange={handleClick} />
            <span> Pets </span>
        </label>

        <label>
            <input type="checkbox" name="entrance" checked={selected.includes('entrance')} onChange={handleClick} />
            <span> Private Entrance </span>
        </label>
        </>
    )
}