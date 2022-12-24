import React, { useState } from 'react'
const data = require("./data.json");

const Search = () => {

    const [value, setValue] = useState(" ");
    const [makeup, setMakeup] = useState("displayNoClass");
    const onChange = (event) => {
        setValue(event.target.value);
        setMakeup("dropdownList")
    }
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        console.log('search', searchTerm);
    }
    return (
        <>

            <div className="searchOuterContainer">

                <div className='searchContainer'>
                    <input type="text" value={value} placeholder="search here" onChange={onChange} />
                    <button className='searchBtn' onClick={() => onSearch(value)} > Search</button>
                </div >
                <div className="dropdownList">
                    {data.filter((item) => {
                        const searchTerm = value.toString().toLowerCase();
                        const Language = item.toString().toLowerCase();


                        return searchTerm && Language.startsWith(searchTerm)
                    })
                        .map((item) => (
                            <div className='dropdownRow' onClick={() => onSearch(item.language)}  >{item.lang}
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Search