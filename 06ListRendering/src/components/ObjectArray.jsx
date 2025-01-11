function ObjectArray() {
    // Object array with key-value pairs
    const arrayObject1 = [
      { name: "Shan",team:"KK",Num:10 },
      { name: "James",team : "KK",Num:9 },
      { name: "Hasan",team : "KK" ,Num:11},
      { name: "Milne",team : "KK" ,Num:19}
    ];

    // alphabetical sorting
  //   arrayObject1.sort((a, b) => a.name.localeCompare(b.name));
  //   // reverse alphabetical sorting
  //   arrayObject1.sort((a, b) => b.name.localeCompare(a.name));
  //   // sorting number in ascending
  //   arrayObject1.sort((a, b) => a.Num - b.Num);
  //   // sorting number in descending
  // arrayObject1.sort((a, b) => b.Num - a.Num);
  //  // Using map to render the list
  // const items = arrayObject1.map((item, index) => <li key={index}>Player Name = {item.name},Team = {item.team} , Player Num = {item.Num}</li>);
  
  // filtering the result less than and equals to 11
//  const item1 =  arrayObject1.filter(f=>f.Num<=11)
  // filtering the result greater than and equals to 11
 const item1 =  arrayObject1.filter(f=>f.Num>=11)
    // Using map to render the list
    const items1 = item1.map((item1, index) => <li key={index}>Player Name ={item1.name}Team = {item1.team} , Player Num = { item1.Num}</li>);
  
    return (
      <div className="list2">
        <ol>{items1}</ol>
      </div>
    );
  }
  
  export default ObjectArray;
  