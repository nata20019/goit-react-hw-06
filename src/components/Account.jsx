import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/store";

export const Account = () => {
   const dispatch = useDispatch();
    const balance = useSelector(state => state.account.balance);
    
    // const handleDeposit= value => 
    //     dispatch(deposit(value));
    
    return (
        <div>
            <p>
                <b>Balance: {balance} credits</b>
                </p>
<button onClick={()=> dispatch(deposit(10))}>Deposit</button>
<button onClick={()=> dispatch(withdraw(5))}>Withdraw</button>
        </div>
    );
};