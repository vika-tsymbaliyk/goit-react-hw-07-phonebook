import { useDispatch, useSelector } from "react-redux";
import { FilterWrap, FilterLabel } from "./Filter.styled";
import { selectFilter } from "redux/selectors";
import { setFilter } from "redux/filterSlise";


export const Filter =()=>{
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const searchContact = filterContact => {
        dispatch(setFilter(filterContact))
      };

    return(
        <FilterWrap>
            <FilterLabel htmlFor="filter">Find contacts by name
            <input name="filter" type="text" value={filter} placeholder="Search contact"
            onChange={evt => searchContact(evt.target.value)} />
            </FilterLabel>
        </FilterWrap>
    )
}
