import React, { useState } from 'react'
import { SearchInputProps } from './interfaces';


const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [value, setValue] = useState<string>('');

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(value)
        }
    }

    return (
        <div className="input-group">
            <input type="text" placeholder="Поиск"
                onChange={valueChangeHandler}
                value={value}
                onKeyPress={keyPressHandler}
            />
            <button type="button" onClick={() => onSearch(value)}>Поиск</button>
        </div>
    )
}

export default SearchInput