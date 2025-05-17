import DogCart, { DogCartProps } from "../component/dog-cart";


export default async function DogsPage() {

    const res = await fetch(`https://api.thedogapi.com/v1/images/search?&has_breeds=true&limit=10`,{
        headers:{
             "x-api-key": process.env.DOGS_API_KEY || "",
        }
    })
    const data = await res.json()
    console.log(data);
    
    return <div>
        <h1>dog page</h1>
        <div>
            {data.map((item:DogCartProps)=>(<DogCart key={item.id} url={item.url} id={item.id}/>))}
        </div>
    </div>
}