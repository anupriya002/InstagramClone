import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

function Suggestions (){

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
          name: faker.name.firstName(),
          id: i,
          username: faker.internet.userName(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
          password: faker.internet.password(),
          birthdate: faker.date.birthdate(),
          registeredAt: faker.date.past(),
          worksAt: faker.company.name(),
        }));
        setSuggestions(suggestions);
      }, []);
    
    return (
      <div className="mt-4 ml-10 ">
        <div className="flex justify-between text-sm mb-5">
          <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
          <button className="text-gray-600 font-semibold ">See All</button>
        </div>

        {suggestions.map(profile => (
          <div 
            key={profile.id} 
            className="flex items-center justify-between mt-3"> 

            <img className="w-10 h-10 rounded-full border p-[2px]" src={profile.avatar} alt=""/>

            <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">{profile.username}</h2>
                <h3 className="text-xs text-gray-400">Works At {profile.worksAt}</h3>
            </div>
            <button className="text-blue-400 text-xs font-bold">Follow</button>
          </div>
        // start at: 2:38:22  "next-auth": "^4.14.0",  "next-auth": "4.0.0-beta.4",

        ))}
      </div>
    );
}

export default Suggestions;