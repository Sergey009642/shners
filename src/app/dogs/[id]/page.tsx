type DogSingleProps = {
  params: {
    id: string;
  };
};

export default async function DogSingle({ params }: DogSingleProps) {
  const { id } = params;

  const res = await fetch(`https://api.thedogapi.com/v1/images/${id}`, {
    headers: {
      "x-api-key": process.env.DOGS_API_KEY || "",
    },
  });

  if (!res.ok) {
    return (
      <div className="p-12 text-center text-red-600 font-semibold text-xl">
        Dog not found
      </div>
    );
  }

  const data = await res.json();

  if (!data || !data.breeds || data.breeds.length === 0) {
    return (
      <div className="p-12 text-center text-yellow-600 font-semibold text-xl">
        No breed information available.
      </div>
    );
  }

  const dogData = data.breeds[0];

  return (
    <main className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <img
          src={data.url}
          alt={dogData.name}
          className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      <section className="mt-8 px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          {dogData.name}
        </h1>

        <div className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-300 text-lg font-medium">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl px-5 py-3 shadow-md flex-1 min-w-[150px] text-center">
            <h2 className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-1">
              Height
            </h2>
            <p>{dogData.height.metric} cm</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl px-5 py-3 shadow-md flex-1 min-w-[150px] text-center">
            <h2 className="text-sm uppercase text-gray-500 dark:text-gray-400 mb-1">
              Weight
            </h2>
            <p>{dogData.weight.metric} kg</p>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-inner">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Temperament
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {dogData.temperament || "No temperament info available."}
          </p>
        </div>
      </section>
    </main>
  );
}
