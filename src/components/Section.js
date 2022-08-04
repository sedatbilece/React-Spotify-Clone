import SongItem from "./SongItem";


function Section ({title,more=false,items}){



    return (<section className="mt-8">
        <header className="flex items-center justify-between mb-4 ">
        <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline cursor-pointer"> {title}</h3>
        {more && <a className="text-link text-xs font-semibold hover:underline" href={more} >HEPSİNİ GÖR</a>}
        </header>

        <div className="grid grid-cols-5 gap-x-6">
          {items.map(item=> <SongItem item ={item} key={item.id}/>) }
        </div>
    </section>)
}


export default Section;