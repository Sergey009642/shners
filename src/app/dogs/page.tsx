import DogCart from "../component/dog-cart";

interface DogApiResponse {
  id: string;
  url: string;
  breeds: any[];
}

export default async function DogsPage() {
  const res = await fetch(
    `https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=100`,
    {
      headers: {
        "x-api-key": process.env.DOGS_API_KEY || "",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch dogs");
  }

  const data: DogApiResponse[] = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        🐶 Dog Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <DogCart key={item.id} url={item.url} id={item.id} />
        ))}
      </div>
    </div>
  );
}
