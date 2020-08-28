import React, { useState } from 'react'

const SearchInput: React.FC<{onSearch(value: string):void}> = (props) => {

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