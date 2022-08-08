import categories from 'data/categories';
import Category from 'components/SearchContent/Category';
import Title from 'components/Title';
import favorites from 'data/favorites'
import WideCategory from 'components/SearchContent/WideCategory';
function Search (){


    return(<div>
        



        <section className='mb-4'>
        <Title title='Hepsine göz at' more='/sarkilar'/>
         
         <div className='grid grid-cols-5 gap-6'>
          {
             categories.map((category,index)=>{
                 return <Category key={index} category={category}/>
             })
          }
     </div>
        </section>

    




    </div>)
}   


export default Search;