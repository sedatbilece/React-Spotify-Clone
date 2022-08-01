const HomeIcon = ({size}) => {

    return (
        <svg role="img" height={size} width={size} class="Svg-ytk21e-0 jAKAlG home-active-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z">
            </path></svg>
    )
}



const Icon =  ({size,name}) =>{


    const icons={
        home: HomeIcon,

    }

    const Component = icons[name];
    return <Component size={size} />

}