export default function AddressLink({children, className=null}) {
    if(!className) {
        className = 'address-link'
    } 
    className += ' address-link2'

    return (
        <a className={className} href={`https://www.google.com/maps/place/${children}`}>{children}</a>
    
    )}
    