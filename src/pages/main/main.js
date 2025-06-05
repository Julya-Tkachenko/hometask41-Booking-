import { Select, TextField} from "@mui/material";
import { Formik, useFormik} from "formik";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDestinations } from "../../redux/slices/destinationReducer";

export default () => {
    
    const isLoading = useSelector(state => state.destinations.isLoading);
    const destinationsList = useSelector(state => state.destinations.list);
    const selectedDestination = useSelector(state => state.destinations.selectedDestination);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDestinations())
    }, []);

    const formik = useFormik({
        initialValues: {
            destination: selectedDestination, checkIn: null, checkOut: null, adults: null, children: null
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    if (isLoading) {
        return  <div>loading...</div>
    }


    return <div className="main">
        <form className="main-search" onSubmit={formik.handleSubmit}>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="destination">Destination</InputLabel>
                    <Select
                       LabelId="destination"
                       id="demo-simple-select"
                       name="destination"
                       value={formik.values.destination}
                       label="destination"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       error={formik.touched.destination && Boolean(formik.errors.destination)}
                    >
                        {destinationsList.map(d => {
                            return <MenuItem key={d.id} value={d.id}>{d.label}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </div>
            <div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    </div>
}