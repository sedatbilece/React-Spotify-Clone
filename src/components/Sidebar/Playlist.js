

function Playlist(){



    return (<div className="text-link mx-6 mt-4 flex-auto  overflow-auto border-t border-white border-opacity-10 ">
       <ul>
          {new Array(30).fill(<li>
            <a href="#" className="text-xs text-link hover:text-white flex h-8 items-center ">
                2.Çalma Listem
            </a>
          </li>)}
       </ul>
    </div>)
}

export default Playlist;