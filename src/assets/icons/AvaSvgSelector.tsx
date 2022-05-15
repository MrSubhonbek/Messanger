interface IProps {
    id: number
}

export const AvaSvgSelector = ({ id }: IProps) => {
    switch (id) {
        case 1:
            return <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 22V48" stroke="#B5BFD6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 35H48" stroke="#B5BFD6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="35" cy="35" r="34.5" stroke="#B5BFD6" />
            </svg>
                ;
        default:
            return null
    }
}