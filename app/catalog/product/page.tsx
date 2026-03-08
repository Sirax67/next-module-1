export default function Home() {
  return (
    <div className="container mx-auto p-8 flex " >
        <div className="w-100 h-100 border  border-gray-300 rounded-2xl">

        </div>
        <div className="flex-col pl-8 pt-8">
            <h1 className="text-3xl font-bold mb-8">Товар</h1>
            <p className="w-120">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Quas dignissimos deserunt perspiciatis
                unde eaque adipisci omnis, ratione natus
                accusamus porro sequi officiis aut
                itaque earum ipsum delectus ipsa atque quod?
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
            </p>
            <div className="flex items-center mt-25">
                <p className="mr-15">20 000 руб</p>
                <button className="px-30 py-2 bg-blue-800 rounded text-white">
                    Купить
                </button>
            </div>
            
        </div>
        
    </div>

  );
}
