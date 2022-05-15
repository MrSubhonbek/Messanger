interface IProps {
    id: string
}

export const GlobalSvgSelector = ({ id }: IProps) => {
    switch (id) {
        case 'overview':
            return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.714355 22.8571H8.06129L9.38782 31.4286H28.6225L30.6123 22.8571H39.2858" stroke="#B5BFD6" stroke-linecap="square" stroke-linejoin="round" />
                <rect x="1" y="1" width="38" height="38" rx="4" stroke="white" stroke-width="2" />
            </svg>
                ;
        case 'files':
            return <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12.2V37.8C1 38.6 1.47059 39.4 2.17647 40C2.88235 40.6 3.82353 41 4.76471 41H27.8235M29.2353 1V11H41" stroke="#B5BFD6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30.4117 1H14.1765C13.2353 1 12.2941 1.4 11.5882 2C10.8823 2.6 10.4117 3.4 10.4117 4.2V29.8C10.4117 30.6 10.8823 31.4 11.5882 32C12.2941 32.6 13.2353 33 14.1765 33H37.2353C38.1764 33 39.1176 32.6 39.8235 32C40.5294 31.4 41 30.6 41 29.8V10L30.4117 1Z" stroke="#B5BFD6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
                ;
        case 'calendar':
            return <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 5H9C4.58172 5 1 8.58172 1 13V33C1 37.4183 4.58172 41 9 41H33C37.4183 41 41 37.4183 41 33V13C41 8.58172 37.4183 5 33 5Z" stroke="#B5BFD6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 17H41M13 1V9V1ZM29 1V9V1Z" stroke="#B5BFD6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
                ;
        case 'people':
            return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6523 21.8162C22.9784 21.8162 24.2501 22.3908 25.1877 23.4137C26.1254 24.4365 26.6521 25.8237 26.6521 27.2702L26.6488 29.99C26.9921 36.6694 22.2757 40 13.5327 40C4.81978 39.9964 0 36.713 0 30.0882V27.2702C0 25.8237 0.52676 24.4365 1.4644 23.4137C2.40204 22.3908 3.67375 21.8162 4.99977 21.8162H21.6523ZM34.9851 21.8162C36.3111 21.8162 37.5828 22.3908 38.5204 23.4137C39.4581 24.4365 39.9849 25.8237 39.9849 27.2702V29.1864C40.2848 35.175 36.1184 38.1783 28.5054 38.1783C27.4721 38.1783 26.4988 38.1238 25.5922 38.0147C26.5588 37.0403 27.2821 35.8804 27.7421 34.5314L28.5054 34.5423C34.4518 34.5423 36.8283 32.8297 36.6517 29.2846V27.2702C36.6517 26.7881 36.4761 26.3257 36.1635 25.9847C35.851 25.6438 35.4271 25.4522 34.9851 25.4522H28.1087C27.7742 24.0438 27.0602 22.7772 26.0588 21.8162H34.9851ZM21.6523 25.4522H4.99977C4.55777 25.4522 4.13386 25.6438 3.82132 25.9847C3.50877 26.3257 3.33318 26.7881 3.33318 27.2702V30.0882C3.33318 34.2514 6.42637 36.3603 13.5327 36.3603C20.6124 36.3603 23.5323 34.2987 23.3189 30.0882V27.2702C23.3189 26.7881 23.1434 26.3257 22.8308 25.9847C22.5183 25.6438 22.0944 25.4522 21.6523 25.4522ZM13.3327 0C15.5428 0 17.6623 0.957702 19.225 2.66242C20.7877 4.36714 21.6657 6.67924 21.6657 9.09008C21.6657 11.5009 20.7877 13.813 19.225 15.5177C17.6623 17.2225 15.5428 18.1802 13.3327 18.1802C11.1227 18.1802 9.00317 17.2225 7.44044 15.5177C5.87771 13.813 4.99977 11.5009 4.99977 9.09008C4.99977 6.67924 5.87771 4.36714 7.44044 2.66242C9.00317 0.957702 11.1227 0 13.3327 0ZM29.9986 3.63603C31.7667 3.63603 33.4623 4.40219 34.7125 5.76597C35.9627 7.12975 36.665 8.97943 36.665 10.9081C36.665 12.8368 35.9627 14.6865 34.7125 16.0502C33.4623 17.414 31.7667 18.1802 29.9986 18.1802C28.2306 18.1802 26.535 17.414 25.2848 16.0502C24.0346 14.6865 23.3323 12.8368 23.3323 10.9081C23.3323 8.97943 24.0346 7.12975 25.2848 5.76597C26.535 4.40219 28.2306 3.63603 29.9986 3.63603ZM13.3327 3.63603C12.0067 3.63603 10.735 4.21065 9.79735 5.23349C8.85971 6.25632 8.33295 7.64358 8.33295 9.09008C8.33295 10.5366 8.85971 11.9238 9.79735 12.9467C10.735 13.9695 12.0067 14.5441 13.3327 14.5441C14.6587 14.5441 15.9305 13.9695 16.8681 12.9467C17.8057 11.9238 18.3325 10.5366 18.3325 9.09008C18.3325 7.64358 17.8057 6.25632 16.8681 5.23349C15.9305 4.21065 14.6587 3.63603 13.3327 3.63603ZM29.9986 7.27207C29.1146 7.27207 28.2668 7.65515 27.6417 8.33704C27.0166 9.01892 26.6655 9.94376 26.6655 10.9081C26.6655 11.8724 27.0166 12.7973 27.6417 13.4792C28.2668 14.1611 29.1146 14.5441 29.9986 14.5441C30.8827 14.5441 31.7305 14.1611 32.3556 13.4792C32.9806 12.7973 33.3318 11.8724 33.3318 10.9081C33.3318 9.94376 32.9806 9.01892 32.3556 8.33704C31.7305 7.65515 30.8827 7.27207 29.9986 7.27207Z" fill="#B5BFD6" />
            </svg>
                ;
        case 'video':
            return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 5.87827 0.526784 3.84344 1.46447 2.34315C2.40215 0.842854 3.67392 5.54049e-08 5 5.54049e-08H23.75C24.9627 -0.000228192 26.1342 0.704771 27.0462 1.98371C27.9582 3.26265 28.5486 5.02835 28.7075 6.952L36.4825 1.424C36.8631 1.15269 37.28 1.03785 37.6953 1.08994C38.1107 1.14203 38.5113 1.35938 38.8608 1.72225C39.2103 2.08512 39.4976 2.58198 39.6966 3.1677C39.8955 3.75341 39.9998 4.40938 40 5.076V34.924C39.9996 35.5901 39.8953 36.2455 39.6965 36.8307C39.4977 37.416 39.2107 37.9125 38.8615 38.2753C38.5124 38.638 38.1121 38.8555 37.6971 38.9081C37.2821 38.9606 36.8655 38.8464 36.485 38.576L28.7075 33.048C28.5486 34.9716 27.9582 36.7374 27.0462 38.0163C26.1342 39.2952 24.9627 40.0002 23.75 40H5C3.67392 40 2.40215 39.1571 1.46447 37.6569C0.526784 36.1566 0 34.1217 0 32V8ZM28.75 28.7L37.5 34.924V5.076L28.75 11.3V28.7ZM5 4C4.33696 4 3.70107 4.42143 3.23223 5.17157C2.76339 5.92172 2.5 6.93913 2.5 8V32C2.5 33.0609 2.76339 34.0783 3.23223 34.8284C3.70107 35.5786 4.33696 36 5 36H23.75C24.413 36 25.0489 35.5786 25.5178 34.8284C25.9866 34.0783 26.25 33.0609 26.25 32V8C26.25 6.93913 25.9866 5.92172 25.5178 5.17157C25.0489 4.42143 24.413 4 23.75 4H5Z" fill="#B5BFD6" />
                <circle cx="20.5" cy="10.5" r="3.5" fill="#B5BFD6" />
            </svg>
                ;
        case 'setting':
            return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 40L0 30V10L20 0L40 10V30L20 40ZM20 4.20364L4.21053 12.0964V27.9036L20 35.7982L35.7895 27.9036V12.0964L20 4.20182V4.20364ZM20 27.2727C18.0517 27.2731 16.1636 26.69 14.6573 25.6228C13.151 24.5557 12.1198 23.0705 11.7393 21.4202C11.3588 19.77 11.6527 18.057 12.5707 16.5729C13.4888 15.0888 14.9743 13.9256 16.7742 13.2814C18.574 12.6372 20.5768 12.5519 22.4413 13.0401C24.3058 13.5282 25.9166 14.5596 26.9993 15.9585C28.0819 17.3574 28.5695 19.0372 28.3788 20.7117C28.1882 22.3862 27.3311 23.9519 25.9537 25.1418C24.3713 26.5013 22.232 27.267 20 27.2727ZM20 16.3636C19.4471 16.3635 18.8995 16.4575 18.3886 16.6401C17.8777 16.8227 17.4135 17.0905 17.0224 17.4281C16.6313 17.7656 16.3211 18.1664 16.1093 18.6076C15.8976 19.0487 15.7886 19.5216 15.7884 19.9991C15.7883 20.4766 15.8971 20.9495 16.1085 21.3907C16.32 21.832 16.63 22.2329 17.0209 22.5707C17.4118 22.9084 17.8759 23.1764 18.3867 23.3592C18.8975 23.5421 19.445 23.6362 19.9979 23.6364C21.1146 23.6366 22.1857 23.2537 22.9755 22.5719C23.7653 21.8902 24.2092 20.9653 24.2095 20.0009C24.2098 19.0365 23.7664 18.1115 22.977 17.4293C22.1876 16.7472 21.1167 16.3639 20 16.3636Z" fill="#B5BFD6" />
            </svg>
                ;

        default:
            return null
    }
}