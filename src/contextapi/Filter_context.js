import {createContext, useContext, useEffect, useReducer} from "react"
import { useProductContext } from "./ProductContext"
import reducer from "../reducers/FilterReducer"
const FilterContext = createContext()


const initialState = {
    filter_products:[],
    all_products:[],
    grid_view: false ,
    sorting_value:"lowest",
    filters:{
        text: "",
        category:"all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0
    }

}

export const FilterContextProvider = ({children}) => {

    const {products} = useProductContext()
    const [state,dispatch] = useReducer(reducer,initialState)

    // to set the grid view
    const setGridView = ()=>{
        return dispatch({type: "SET_GRID_VIEW"})
    }

    const setListView = ()=>{
        return dispatch({type: "SET_LIST_VIEW"})
    }

    // sorting function
    const sorting = (event)=>{
        let userValue = event.target.value
        dispatch({type:"GET_SORT_VALUE" , payload: userValue})
    }


    // update the filter values
    const updateFilterValue = (event)=>{
        let name = event.target.name
        let value = event.target.value

        return dispatch({type:"UPDATE_FILTER_VALUE", payload:{name, value}})

    }

    // to clear filters

    const clearFilters = ()=>{
        dispatch({type: "CLEAR_FILTERS"})
    }



    // to sort the product
    useEffect(()=>{
        dispatch({type: "FILTER_PRODUCTS"})
        dispatch({type: "SORTING_PRODUCTS"})
    },[products, state.sorting_value , state.filters])


    // to load all the product for grid and list view
    useEffect(()=>{
        dispatch({type: "LOAD_FILTER_PRODUCTS",payload:products})
    },[products])

    return <FilterContext.Provider value={{...state, setGridView , setListView, sorting , updateFilterValue,clearFilters}}>
        {children}
    </FilterContext.Provider>

}

export const useFilterContext = ()=>{
    return useContext(FilterContext)
}