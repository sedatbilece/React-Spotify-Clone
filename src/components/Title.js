

export default function Title({title,more=false}){


     return (<div>
        <header className="flex items-center justify-between mb-4 ">
        <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline cursor-pointer"> {title}</h3>
        {more && <a className="text-link text-xs font-semibold hover:underline" href={more} >HEPSİNİ GÖR</a>}
        </header>


     </div>)

}