import React, { useState } from 'react'


interface SearchInputProps {
    onSearch(value : string) : void
}

const SearchInput: React.FC<SearchInputProps> = (props) => {

    const [value, setValue] = useState<string>('');

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return(
        <div className="input-group">
            <input type="text" placeholder="Поиск"
            onChange={valueChangeHandler}
            value={value}
            />
            <button type="button" onClick={() => props.onSearch(value)}>Поиск</button>
        </div>
    )
}

export default SearchInput