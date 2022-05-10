import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hook";
import {carActions} from "../../redux/slices";
import {Car} from "../Car/Car";

const Cars: FC = () => {
    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch])

    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};