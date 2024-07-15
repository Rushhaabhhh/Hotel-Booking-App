import Image from "./Image";

export default function PlaceImage({ place, index=0, className=null }) {
    if(!place.photos?.length) {
        return ''
    }
    if(!className) {
        className = 'place-image'
    };

    return (
        <Image src={place.photos[index]} alt={place.name} className={className} />
    )
}

const styles = {
    placeImage: {
        objectFit: 'cover',
    }
}