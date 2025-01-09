import Card from "./components/Card"


function App() {
  return (
    <div>
     
      <h1 className="main">Card Components</h1>
      <div className="main-container" >
      <Card img={"https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeNzg-kMHhUBP4AmHnLsrPYzxKHVceLnkwtLhxZlDssj7KjhStloJR6px7EbquZ83uDcygnWkekxysvuNYVzLQ3GyBMRl2PpU7pO.jpg?r=db8"} title={'Pikachu'} desc={'Pikachu is an iconic electric-type Pokémon known for its yellow fur and signature move, Thunderbolt. It is the beloved mascot of the Pokémon franchise and a symbol of friendship and adventure.'} />
      <Card img={"https://images2.minutemediacdn.com/image/upload/c_crop,w_1280,h_720,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/video_games/01jc6dm4t8ks8h2wa824.jpg" } title={'Mewtwo'} desc={'Mewtwo is a powerful psychic-type Pokémon created through genetic experimentation. Known for its strength and tragic backstory, Mewtwo plays a central role in the Pokémon franchise lore'}/>
              <Card img={"https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeNzg-kMHhUBP4AmHnLsrPYzxKHVceLnkwtLhxZlDssj7KjhStloJR6px7EbquZ83uDcygnWkekxysvuNYVzLQ3GyBMRl2PpU7pO.jpg?r=db8" } title={'Pikachu'} desc={'Pikachu is an iconic electric-type Pokémon known for its yellow fur and signature move, Thunderbolt. It is the beloved mascot of the Pokémon franchise and a symbol of friendship and adventure.'}/>
       <Card img={"https://images2.minutemediacdn.com/image/upload/c_crop,w_1280,h_720,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/video_games/01jc6dm4t8ks8h2wa824.jpg" } title={'Mewtwo'} desc={'Mewtwo is a powerful psychic-type Pokémon created through genetic experimentation. Known for its strength and tragic backstory, Mewtwo plays a central role in the Pokémon franchise lore'}/>

      </div>
      </div>
  )
}

export default App