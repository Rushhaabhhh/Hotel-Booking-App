export default function Image({src,...rest}) {
    src = src && src.startsWith('https://') ? src : `http://localhost:5000/${src}`

    return (
        <img src={src} {...rest}  alt={''}/>
    )
}