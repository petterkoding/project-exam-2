import { useEffect } from "react";
import styled from "styled-components";

function FilterOptions({ arr, setState, activeFilter, setFilterOption, filterType }) {
    
    let filterBy = {};

    
    filterBy = {
        type: filterType,
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    } 
    
    useEffect(() => {
        if (activeFilter === 1) {
            setState(arr);
            return;
        };
        const filtered = arr.filter((establishment) => establishment.attributes.rating >= activeFilter);
        setState(filtered);
        
    }, [activeFilter, arr, setState]);
    
    return (

        <FilterContainer>
            <Label htmlFor={filterBy.type}>{filterBy.type}</Label>
            <Select name={filterBy.type} onChange={(e) => setFilterOption(e.target.value)}>
                {filterBy.options.map(opt => {
                    return <Option key={opt} value={opt}>{opt}</Option>
                })}
            </Select>
        
        </FilterContainer>
    )
};

export default FilterOptions;

const FilterContainer = styled.div`
    margin: 1rem 1rem 0 0;
`;


const Option = styled.option`
    text-transform: capitalize;
`;

const Label = styled.label`
    text-transform: capitalize;
    display: block;
    font-size: 0.9rem;
    color: #333333;
`;

const Select = styled.select`
    height: 35px;
    width: 100%;
    text-align: left;
    font-size: 1rem;
    color: #1f1f1f;
    padding: 0.2rem 0.5rem;
`;