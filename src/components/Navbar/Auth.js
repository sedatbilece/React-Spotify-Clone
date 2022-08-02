import { Menu } from '@headlessui/react'
import {Icon} from 'Icons'

export default function Auth (){

const user ={
  name:'Sedat Bilece',
  avatar:'https://yt3.ggpht.com/u0IIM17oW5IyuZBmRcnZT_2GqbRM7yO7qLDwSD3sewQ1kaNK9vI-fLOK9U6q6UnR8Xg2_09QtA=s108-c-k-c0x00ffffff-no-rj'
}




    return ( <Menu as='nav' className={'flex items-center relative'}>
        
        { ({open})=>(
          <>
          <Menu.Button className={`flex item-center justify-center h-8 rounded-3xl ${open ? 'bg-active':'bg-black'} bg-black pr-2 mt-5 hover:bg-active` }>
          <img src={user.avatar} className='w-8 h-8 rounded-full p-px mr-2'/>
          <span>{user.name}</span>
          <span className={open===true ? 'rotate-180':''}>
          <Icon name="downdir" size={16} className='ml-2'/>
          </span>
        </Menu.Button>
        <Menu.Items className={'absolute top-full right-0 w-48 bg-active rounded translate-y-2 '}>
          <Menu.Item>
            {({ active }) => (
              <a
                className={` h-8 flex item-center px-2  text-sm ${active && 'bg-white bg-opacity-10'}`}
                href="/account-settings"
              >
                Hesap
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={` h-8 flex item-center px-2  text-sm ${active && 'bg-white bg-opacity-10'}`}
                href="/account-settings"
              >
                Profil
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={` h-8 flex item-center px-2  text-sm ${active && 'bg-white bg-opacity-10'}`}
                href="/account-settings"
              >
                Oturumu Kapat
              </a>
            )}
          </Menu.Item>
          
          
        </Menu.Items>
          </>
        )}
      </Menu>)
}