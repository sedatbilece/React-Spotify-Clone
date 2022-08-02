
import Section from 'components/Section.js';

function Home (){


    const items=[
        {
            id:1,
            title:'#TBT 2021',
            desc:'Dünden bu yıla kalanlar.',
            image:'https://i.scdn.co/image/ab67706f0000000277a376a24530b12d676fb831'
        },
        {
            id:2,
            title:'Türkçe 2010lar',
            desc:' O eskilerin şarkılarını dinleme vakti.',
            image:'https://i.scdn.co/image/ab67706f0000000228f52e6ebf32ef2feaa1ad62'
        },
        {
            id:3,
            title:'LOOP',
            desc:'Döne döne dinlediğin, son yılların hit yabancı şarkıları.',
           image:'https://i.scdn.co/image/ab67706f00000002203768c88c741aa117804007'
        },
        {
            id:4,
            title:'Prom Night',
            desc:'The best tracks for Prom night 2022.',
            image:'https://i.scdn.co/image/ab67706f000000027a232e74cb5baf2ec1659f0a'
        },
        {
            id:5,
            title:'Beast Mode',
            desc:'Get your beast mode on!',
            image:'https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15'
        },
        
    ]

    return(<div>
        <Section title='Beğendiklerin ve dahası' more='#' items={items}/>
        <Section title='Beğendiklerin ve dahası' more='#' items={items}/>
        <Section title='Beğendiklerin ve dahası' more='#' items={items}/>
    </div>)
}


export default Home;