import {useState} from "react";
import Image from "./Image.jsx";

export default function PlaceGallery({place}) {

  const [showAllPhotos,setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
        <div>
            <div>
                <div>
                    <h2>Photos of {place.title}</h2>
                    <button onClick={() => setShowAllPhotos(false)}> 
                    <svg xmlns="http://www.w3.org/2000/svg" >
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                    Close Photos
                    </button>
                </div>
                {place?.photos?.length > 0 && place.photos.map(photo => (
                    <div>
                        <Image src={photo} alt={place.title} />
                    </div>
                ))}
            </div>
        </div>
    )
  }

return ( 
    <div>
        <div>
            <div>
                {place.photos?.[0] && (
                    <div>
                        <Image onClick={() => setShowAllPhotos(true)} src={place.photos[0]} alt={place.title} />
                    </div>
                )}
            </div>
            <div>
                {places.photos?.[1] && (
                    <Image onClick={() => setShowAllPhotos(true)} src={place.photos[1]} alt={place.title} />
                )}
                <div>
                    {places.photos?.[2] && (
                        <Image onClick={() => setShowAllPhotos(true)} src={place.photos[2]} alt={place.title} />
                    )}
                </div>
            </div>
        </div>

        <button onClick = {() => setShowAllPhotos(true)}> Show All Photos
        </button>
    </div>
)}
