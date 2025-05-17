
type DogSingle = {
    params: {
        id: string
    }
}


export default async function DogSingle({ params }: DogSingle) {
    const { id } = await params
    const res = await fetch(`https://api.thedogapi.com/v1/images/${id}`, {
        headers: {
            "x-api-key": process.env.DOGS_API_KEY || "",
        }
    })
    const data = await res.json()
    console.log(data);
    if (!data) {
        return <div>Not Found</div>
    }
    const dogData = data.breeds[0]
    return (
        <div>
            <img className=" w-full h-full object-cover relative" src={data.url} alt="" />
             <h1 className=" absolute top-20 text-2xl text-white">Name:  {dogData.name}</h1>
             <h2 className=" absolute top-30 text-2xl text-white">  Height: {dogData.height.metric} cm </h2>
             <h2 className=" absolute top-40 text-2xl text-white">  Weight: {dogData.weight.metric} kg </h2>
            <p className=" absolute top-50  text-2xl text-white">Temperament: {dogData.temperament}</p>
        </div>
    )
}

